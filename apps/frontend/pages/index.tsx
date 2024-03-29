import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";

import CalendarFooter from "../components/calendar-footer/CalendarFooter";
import CalendarHeader from "../components/calendar-header/CalendarHeader";
import Calendar from "../components/calendar/Calendar";
import InfoModal from "../components/modals/info-modal/InfoModal";
import ModalButtons from "../components/modals/ModalButtons";
import ModalContainer from "../components/modals/ModalContainer";
import ModalContent from "../components/modals/ModalContent";

import { TypeEvent } from "@calendar-nextjs/shared/types/TypeEvent";
import { TypeCalendarSyncStatus } from "../types/TypeCalendarSyncStatus";
import { TypeDay } from "../types/TypeDay";
import { TypeNav } from "../types/TypeNav";
import { EnumWeekDays } from "../types/TypeWeekDays";

import { eventsState } from "../state/events-state";
import { jwtState } from "../state/jwt-state";

import useUserInfo from "../utils/api_requests/useUserInfo";
import GenerateErrorMessage from "../utils/generate-error-message";
import InitSocketIO from "../utils/init-socketIO";
import IsCalendarReadyToSync from "../utils/is-calendar-ready-to-sync";
import LoadCalendar from "../utils/load-calendar";

import { DEFAULT_CALENDAR_STARTING_DAY, DEFAULT_EVENT } from "../config/config";

import {
  MAX_LENGTH_EVENT_DESC,
  MAX_LENGTH_EVENT_LOCATION,
  MAX_LENGTH_EVENT_TITLE,
} from "@calendar-nextjs/shared/config/global-config";

const Home: NextPage = () => {
  const jwt = useRecoilValue(jwtState);
  const [calendarEvents, setCalendarEvents] = useRecoilState(eventsState);
  const [daysInMonth, setDaysInMonth] = useState<TypeDay[]>([]);

  const calendarEventsSocket = InitSocketIO(jwt);
  const [calendarSyncStatus, setCalendarSyncStatus] = useState<TypeCalendarSyncStatus>("notsynced"); // Sync status footer
  const [eventsChanged, setEventsChanged] = useState<boolean>(false); // Utiliser pour notifier que des events ont été modifiés/ajoutés/supprimés

  const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
  const [newEvent, setNewEvent] = useState<TypeEvent>(DEFAULT_EVENT);

  const [showUpdateEventModal, setShowUpdateEventModal] = useState<boolean>(false);
  const [updatedEvent, setUpdatedEvent] = useState<TypeEvent | null>(null);

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const [headerText, setHeaderText] = useState<string>("");

  // Utilisé pour la navigation entre les mois (back et next)
  const dt = new Date();
  const [nav, setNav] = useState<TypeNav>({
    month: dt.getMonth(),
    year: dt.getFullYear(),
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Charger le calendrier à chaque fois que la date de navigation change
  useEffect(() => {
    const Load = async () => {
      try {
        // Initialiser la synchronisation du calendrier
        await InitCalendarSync();
      } catch (err) {}
    };

    setIsLoading(true);

    Load().finally(() => {
      setIsLoading(false);
    });

    return () => {
      // Fermer la connexion socket.io
      calendarEventsSocket.close();
    };
  }, [nav]);

  // Envoyer les nouveaux événements à chaque fois qu'on ajoute/modifie/supprime un événement
  useEffect(() => {
    if (!eventsChanged) {
      return;
    }

    EmitNewEvents();

    setEventsChanged(false);
  }, [eventsChanged]);

  // Trouver le premier jour du calendrier (lundi ou dimanche)
  const FindFirstDayOfCalendar = async () => {
    try {
      const [err, userInfo] = await useUserInfo(jwt);

      if (err) throw err;

      const startingDay = userInfo.week_start_day === "MONDAY" ? EnumWeekDays.Monday : EnumWeekDays.Sunday;

      return startingDay;
    } catch (err) {
      throw err;
    }
  };

  // Initiliaser la synchronisation des événements du calendrier
  const InitCalendarSync = async () => {
    try {
      // Vérifier si le calendrier est prêt à être synchronisé
      const [status, errMessage] = await IsCalendarReadyToSync(jwt);

      if (!status) {
        throw new Error(errMessage);
      }

      // Connection au serveur
      calendarEventsSocket.on("connect", () => {});

      // Rejoindre la bonne room pour synchroniser les événements
      calendarEventsSocket.emit("calendar:join", { jwt: jwt });

      // Événement de succès après avoir rejoint une room
      calendarEventsSocket.on("calendar:joined", () => {});

      // Émettre les événements au serveur
      calendarEventsSocket.emit("calendar:sync", { jwt: jwt, events: calendarEvents });

      // Écouter les événement de synchronisation du calendrier (reçus du serveur)
      calendarEventsSocket.on("calendar:sync", async (events: TypeEvent[]) => {
        // setCalendarEvents(events);
        console.log(`Calendar received ${events.length} events`);

        // Associer les événements avec les jours
        const [_daysInMonth, _headerText] = await AssociateEventsWithDays(events);

        // Mettre à jour le calendrier
        setDaysInMonth(_daysInMonth);
        setHeaderText(_headerText);

        // Mettre à jour le statut de synchronisation
        setCalendarSyncStatus("synced");
      });

      // Évenement de connection
      calendarEventsSocket.on("connect_error", (error: any) => {
        setCalendarSyncStatus("notsynced");
      });

      // Évenement déconnection
      calendarEventsSocket.on("disconnect", (reason) => {
        setCalendarSyncStatus("notsynced");
      });

      // Évenement d'essaie de reconnection
      calendarEventsSocket.io.on("reconnect_attempt", (attemptNumber) => {
        setCalendarSyncStatus("syncing");
      });

      // Évenement de reconnection avec succès
      calendarEventsSocket.io.on("reconnect", (attemptNumber) => {
        setCalendarSyncStatus("synced");
      });

      // Évenement de reconnection échouée
      calendarEventsSocket.io.on("reconnect_failed", () => {
        setCalendarSyncStatus("notsynced");
      });

      // Évenement de reconnection échouée
      calendarEventsSocket.io.on("reconnect_error", (error) => {
        setCalendarSyncStatus("notsynced");
      });

      // Évenement d'erreur
      calendarEventsSocket.io.on("error", (error) => {
        setCalendarSyncStatus("notsynced");
      });

      // Évenement de déconnection
      calendarEventsSocket.io.on("close", (error) => {
        setCalendarSyncStatus("notsynced");
      });
    } catch (err) {
      const errMessage = GenerateErrorMessage("Calendar sync error", (err as Error).message);
      alert(errMessage);
    }
  };

  // Émettre les nouveaux événements au serveur
  const EmitNewEvents = async () => {
    try {
      const [status, errMessage] = await IsCalendarReadyToSync(jwt);

      if (errMessage.length > 0) {
        throw new Error(errMessage);
      }

      if (!status) {
        throw new Error("Calendar is not ready to sync");
      }

      // Émettre les événements au serveur
      calendarEventsSocket.emit("calendar:sync", { events: calendarEvents, jwt: jwt });

      return true;
    } catch (err) {
      const errMessage = GenerateErrorMessage("Cannot sync calendar", (err as Error).message);
      alert(errMessage);
    }
  };

  // Émettre un événment à supprimer du serveur
  const EmitDeleteEvent = async (event_id: string) => {
    try {
      const [status, errMessage] = await IsCalendarReadyToSync(jwt);

      if (errMessage.length > 0) {
        throw new Error(errMessage);
      }

      if (!status) {
        throw new Error("Calendar is not ready to sync");
      }

      calendarEventsSocket.emit("calendar:delete", { event_id: event_id, jwt: jwt });
    } catch (err) {
      const errMessage = GenerateErrorMessage("Cannot sync calendar", (err as Error).message);
    }
  };

  // Changer de mois (avancer)
  const ClickNext = () => {
    if (nav.month === 11) {
      setNav({ month: 0, year: nav.year + 1 });
    } else {
      setNav({ month: nav.month + 1, year: nav.year });
    }
  };

  // Changer de mois (reculer)
  const ClickBack = () => {
    if (nav.month === 0) {
      setNav({ month: 11, year: nav.year - 1 });
    } else {
      setNav({ month: nav.month - 1, year: nav.year });
    }
  };

  // Fermer toutes les autres modals
  const CloseAllModals = () => {
    setShowAddEventModal(false);
    setShowUpdateEventModal(false);
    setShowInfoModal(false);
  };

  // Afficher modal AddEventModal
  const OpenAddEventModal = (year: number, month: number, date: number) => {
    // Fermer toutes les autres modals
    CloseAllModals();

    // Changer les dates de début et de fin de l'événement
    setNewEvent((prev) => ({
      ...prev,
      event_start: new Date(year, month, date),
      event_end: new Date(year, month, date),
    }));
    // Afficher modal AddEventModal
    setShowAddEventModal(true);
  };

  // Afficher modal UpdateEventModal
  const OpenUpdateEventModal = (event: TypeEvent) => {
    // Fermer toutes les autres modals
    CloseAllModals();

    // Mettre en mémoire l'événement à modifier
    setUpdatedEvent(event);

    // Afficher update modal
    setShowUpdateEventModal(true);
  };

  // Créer un évènement
  const CreateEvent = () => {
    // Valider titre
    if (newEvent.title.trim().length > MAX_LENGTH_EVENT_TITLE || newEvent.title.trim().length <= 0) {
      alert(`Event title has to be less than ${MAX_LENGTH_EVENT_TITLE} characters.`);
      return;
    }

    // Valider desc
    if (newEvent.description.trim().length > MAX_LENGTH_EVENT_DESC || newEvent.title.trim().length <= 0) {
      alert(`Event description has to be less than ${MAX_LENGTH_EVENT_DESC} characters.`);
      return;
    }

    // Valider que la date de début n'est pas après la date de fin
    if (newEvent.event_start.getTime() > newEvent.event_end.getTime()) {
      alert("Event start date cannot be after event end date.");
      return;
    }

    // Si les dates sont les mêmes
    // Valider que l'heure de début n'est pas identique à l'heure de fin
    if (newEvent.event_start.getTime() === newEvent.event_end.getTime()) {
      if (newEvent.event_start.getHours() === newEvent.event_end.getHours()) {
        alert("Event start time and end time cannot be the same.");
        return;
      }
    }

    // Valider localisation (seulement si la localisation est définie)
    if (newEvent.location) {
      if (newEvent.location.trim().length > MAX_LENGTH_EVENT_LOCATION || newEvent.location.trim().length <= 0) {
        alert(`Event location has to be less than ${MAX_LENGTH_EVENT_LOCATION} characters.`);
        return;
      }
    }

    // Nouveau évènement à ajouter (les dates sont sauvegardées en UTC, format ISO8601 (YYYY-MM-DDTHH:mm:ss.sssZ))
    const eventToAdd: TypeEvent = {
      event_id: uuidv4(),
      event_creation_date: new Date(),
      event_start: newEvent.event_start,
      event_end: newEvent.event_end,
      title: newEvent.title,
      description: newEvent.description,
      is_completed: false,
      location: newEvent.location ?? "",
    };

    // Sauvegarder nouveau évènement
    setCalendarEvents((prevState) => [...prevState, eventToAdd]); // Rafréchit automatiquement le calendrier grâce à "useRecoilState"

    // Emettre les nouveaux événements au serveur
    setEventsChanged(true);

    // Fermer AddEventModal
    setShowAddEventModal(false);

    // Réinitialiser les valeurs de l'événement
    setNewEvent(DEFAULT_EVENT);
  };

  // Modifier un évènement
  const UpdateEvent = () => {
    // Valider titre
    if (
      !updatedEvent ||
      updatedEvent.title.trim().length > MAX_LENGTH_EVENT_TITLE ||
      updatedEvent.title.trim().length <= 0
    ) {
      alert(`Event title has to be less than ${MAX_LENGTH_EVENT_TITLE} characters.`);
      return;
    }

    // Valider desc
    if (
      !updatedEvent ||
      updatedEvent.description.trim().length > MAX_LENGTH_EVENT_DESC ||
      updatedEvent.title.trim().length <= 0
    ) {
      alert(`Event description has to be less than ${MAX_LENGTH_EVENT_DESC} characters.`);
      return;
    }

    // Valider location (seulement si la localisation est définie)
    if (updatedEvent.location) {
      if (updatedEvent.location.trim().length > MAX_LENGTH_EVENT_LOCATION || updatedEvent.location.trim().length <= 0) {
        alert(`Event location has to be less than ${MAX_LENGTH_EVENT_LOCATION} characters.`);
        return;
      }
    }

    // Trouver l'index de l'évènement à modifier
    const index = calendarEvents.findIndex((event) => event.event_id === updatedEvent.event_id);

    // Modifier l'évènement. Calendrier est rafréchit automatiquement grâce à "useRecoilState"
    setCalendarEvents([
      ...calendarEvents.slice(0, Number(index)),
      updatedEvent,
      ...calendarEvents.slice(Number(index) + 1),
    ]);

    // Émettre les nouveaux événements au serveur
    setEventsChanged(true);

    // Effacer l'événement en mémoire
    setUpdatedEvent(null);

    // Fermer UpdateEventModal
    setShowUpdateEventModal(false);
  };

  // Supprimer un évènement
  const DeleteEvent = () => {
    // Trouver évènement à supprimer
    const index = calendarEvents.findIndex((event) => event.event_id === updatedEvent?.event_id);

    // Supprimer l'évènement. Calendrier est rafréchit automatiquement grâce à "useRecoilState"
    setCalendarEvents([...calendarEvents.slice(0, index), ...calendarEvents.slice(index + 1)]);

    // Émettre événement à supprimer au serveur
    EmitDeleteEvent(updatedEvent?.event_id!).finally(() => {
      // Rependre les événements du serveur
      setEventsChanged(true);
    });
  };

  // Mettre à jour date de l'évènement (drag and drop des événements sur le calendrier)
  const UpdateEventDate = (event: TypeEvent, newDate: Date) => {
    // Trouver évènement à changer la date
    const index = calendarEvents.findIndex((e) => e.event_id === event.event_id);

    // Événement modifié
    let updatedEvent: TypeEvent = {
      ...event,
    };

    // Anciennes dates de l'événement (UTC -> localtime)
    const oldDateStart = new Date(event.event_start);
    const oldDateEnd = new Date(event.event_end);

    // Seulement changer le mois et la date
    updatedEvent.event_start = new Date(
      oldDateStart.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      oldDateStart.getHours(),
      oldDateStart.getMinutes()
    );

    const diff = oldDateEnd.getTime() - oldDateStart.getTime();
    updatedEvent.event_end = new Date(updatedEvent.event_start.getTime() + diff);

    // Mettre à jour l'évènement. Calendrier est rafréchit automatiquement grâce à "useRecoilState"
    setCalendarEvents([
      ...calendarEvents.slice(0, Number(index)),
      updatedEvent,
      ...calendarEvents.slice(Number(index) + 1),
    ]);

    // Émettre les nouveaux événements au serveur
    setEventsChanged(true);

    // Réinitialiser les valeurs de l'évènement
    setUpdatedEvent(null);
  };

  // Retourne une liste des jours avec les événements associés
  async function AssociateEventsWithDays(events: TypeEvent[]): Promise<[TypeDay[], string]> {
    let userCalendarStaringDay = await FindFirstDayOfCalendar();
    if (!userCalendarStaringDay) userCalendarStaringDay = DEFAULT_CALENDAR_STARTING_DAY;

    const [_daysInMonth, _headerText] = LoadCalendar(nav, userCalendarStaringDay);

    _daysInMonth.map((day) => {
      // Associer les événements avec les jours
      day.events = events.filter((event) => {
        const eventStart = new Date(event.event_start);
        const eventEnd = new Date(event.event_end);
        const dayDate = new Date(day.year, day.month, day.date);

        // Vérifier si l'événnement ce passe le même jour que le jour (day.date)
        const isEventOnSameDay =
          eventStart.getDate() === day.date &&
          eventStart.getMonth() === day.month &&
          eventStart.getFullYear() === day.year;

        // Vérifier si l'événement est entre le début et la fin du jour
        const isEventBetweenDayStartAndEnd =
          eventStart.getDate() <= dayDate.getDate() &&
          eventEnd.getTime() >= dayDate.getTime() &&
          eventStart.getMonth() === day.month &&
          eventStart.getFullYear() === day.year;

        // Vérifier si l'événement est sur le dernier jour
        const isEventOnLastDay =
          eventEnd.getDate() === day.date && eventEnd.getMonth() === day.month && eventEnd.getFullYear() === day.year;

        return isEventOnSameDay || isEventBetweenDayStartAndEnd || isEventOnLastDay;
      });
    });

    return [_daysInMonth, _headerText];
  }

  return (
    <div>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Calendar Header */}
      <CalendarHeader
        headerText={headerText}
        clickBack={() => ClickBack()}
        clickNext={() => ClickNext()}
        showInfoModal={() => setShowInfoModal((prev) => !prev)}
        goToCurrentMonth={() => {
          // Aller sur la date d'aujourd'hui
          const date = new Date();
          setNav({ month: date.getMonth(), year: date.getFullYear() });
        }}
        syncStatus={calendarSyncStatus}
      />

      {/* Add event modal */}
      <ModalContainer display={showAddEventModal}>
        <ModalContent>
          <h1>Events</h1>
          <h2>Create new event</h2>

          {/* Start date */}
          <label htmlFor="new-event-start-date">Start date</label>
          <div className="datetime_container">
            <input
              id="new-event-start-date"
              type="datetime-local"
              defaultValue={newEvent?.event_start.toLocaleString("sv").replace(" ", "T")}
              max={"2999-12-31"}
              min={"1999-12-31"}
              onChange={(e) => {
                // Convertir la date en format local time
                const date = new Date(e.target.value);

                // Mettre à jour la date de l'évènement
                setNewEvent({ ...newEvent, event_start: date });
              }}
            />
          </div>

          {/* End date */}
          <label htmlFor="new-event-end-date">End date</label>
          <div className="datetime_container">
            <input
              id="new-event-end-date"
              type="datetime-local"
              defaultValue={newEvent?.event_end.toLocaleString("sv").replace(" ", "T")}
              max={"2999-12-31"}
              min={"1999-12-31"}
              onChange={(e) => {
                // Convertir la date en format local time
                const date = new Date(e.target.value);

                // Mettre à jour la date de l'évènement
                setNewEvent({ ...newEvent, event_end: date });
              }}
            />
          </div>

          {/* title */}
          <label htmlFor="new-event-title">Title</label>
          <input
            id="new-event-title"
            value={newEvent?.title ?? ""}
            placeholder="Title"
            autoFocus
            maxLength={MAX_LENGTH_EVENT_TITLE}
            onChange={(e) => {
              setNewEvent((old) => ({ ...old!, title: e.target.value }));
            }}
          />

          {/* desc */}
          <label htmlFor="new-event-desc">Description</label>
          <textarea
            id="new-event-desc"
            value={newEvent?.description ?? ""}
            placeholder="Description"
            autoFocus
            maxLength={MAX_LENGTH_EVENT_DESC}
            onChange={(e) => {
              setNewEvent((old) => ({ ...old!, description: e.target.value }));
            }}
          />

          {/* Event location */}
          <label htmlFor="new-event-location">
            Location <em>(optional)</em>
          </label>
          <input
            id="new-event-location"
            autoComplete="street-address"
            value={newEvent?.location ?? ""}
            placeholder="Location"
            maxLength={MAX_LENGTH_EVENT_LOCATION}
            onChange={(e) => {
              setNewEvent((old) => ({ ...old, location: e.target.value }));
            }}
          />
        </ModalContent>

        <hr />

        <ModalButtons>
          <button
            className="button-cancel"
            onClick={() => {
              setShowAddEventModal(false);
            }}>
            Cancel
          </button>
          <button
            onClick={() => {
              CreateEvent();
            }}>
            OK
          </button>
        </ModalButtons>
      </ModalContainer>

      {/* Update event modal */}
      <ModalContainer display={showUpdateEventModal}>
        <ModalContent>
          <h1>Update event</h1>

          {/* titre */}
          <label htmlFor="update-event-title">New title</label>
          <input
            id="update-event-title"
            value={updatedEvent?.title ?? ""}
            placeholder={updatedEvent?.title ?? ""}
            autoFocus
            maxLength={MAX_LENGTH_EVENT_TITLE}
            onChange={(e) => {
              setUpdatedEvent((prev) => ({ ...prev!, title: e.target.value }));
            }}
          />

          {/* desc */}
          <label htmlFor="update-event-desc">New description</label>
          <input
            id="update-event-desc"
            value={updatedEvent?.description ?? ""}
            placeholder={updatedEvent?.description ?? ""}
            maxLength={MAX_LENGTH_EVENT_DESC}
            onChange={(e) => {
              setUpdatedEvent((prev) => ({ ...prev!, description: e.target.value }));
            }}
          />

          {/* location */}
          <label htmlFor="update-event-location">
            New location <em>(optional)</em>
          </label>
          <input
            id="update-event-location"
            autoComplete="street-address"
            value={updatedEvent?.location ?? ""}
            placeholder="Location"
            maxLength={MAX_LENGTH_EVENT_LOCATION}
            onChange={(e) => {
              setUpdatedEvent((old) => ({ ...old!, location: e.target.value }));
            }}
          />
        </ModalContent>

        <hr />

        <ModalButtons>
          <button
            className="button-delete"
            onClick={(e) => {
              if (window.confirm("Are you sure you want to delete this event?")) {
                DeleteEvent();
                setShowUpdateEventModal(false);
              }
            }}>
            Delete
          </button>
          <button
            className="button-cancel"
            onClick={() => {
              setShowUpdateEventModal(false);
            }}>
            Cancel
          </button>
          <button
            onClick={() => {
              UpdateEvent();
            }}>
            OK
          </button>
        </ModalButtons>
      </ModalContainer>

      {/* Guide modal */}
      <InfoModal
        display={showInfoModal}
        CloseModal={() => {
          setShowInfoModal(false);
        }}
      />

      {/* Calendrier */}
      <main>
        {isLoading && <span style={{ color: "white" }}>loading...</span>}
        {!isLoading && (
          <>
            <Calendar
              daysInMonth={daysInMonth}
              calendarEvents={calendarEvents}
              syncStatus={calendarSyncStatus}
              onAddEvent={OpenAddEventModal}
              onUpdateEvent={OpenUpdateEventModal}
              onEmitEventDragged={UpdateEventDate}
            />

            {/* Footer */}
            <CalendarFooter syncStatus={calendarSyncStatus} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
