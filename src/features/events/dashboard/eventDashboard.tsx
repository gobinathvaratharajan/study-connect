import EventAttendee from '../dashboard/eventAttendee';
import EventForm from '../form/eventform';
import Sidebar from '../../sidebar';
import { events } from '../../../lib/data/sampleData';
import { useEffect, useState } from 'react';
import type { IEvents } from '../../../lib/types';
import { AnimatePresence, motion } from 'motion/react';

export default function EventDashboard() {
  const [formOpen, setFormOpen] = useState(true);
  const [eventList, setEventList] = useState<IEvents[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<IEvents | null>(null);

  const handleCreateEvent = (event: IEvents) => {
    setEventList((prevEvents) => [...prevEvents, event]);
  };

  const handleSelectEvent = (event: IEvents) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleUpdateEvent = (updatedEvent: IEvents) => {
    setEventList((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    // setSelectedEvent(updatedEvent);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEventList((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
    // if (selectedEvent?.id === eventId) {
    //   setSelectedEvent(null);
    //   setFormOpen(false);
    // }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setEventList(events);
    };
    fetchEvents();
    // Cleanup function to reset the event list when the component unmounts
    return () => {
      setEventList([]);
    };
  }, []);

  return (
    <div className="flex flex-row bg-gray-50 justify-between w-full">
      <div className="w-1/6 pt-2 border-r-2 pr-6 border-r-gray-100">
        <Sidebar />
      </div>
      <div className="w-3/6 flex flex-col px-8 gap-4 pt-4">
        {eventList.map((event) => (
          <EventAttendee
            key={event.id}
            event={event}
            onSelectEvent={handleSelectEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        ))}
      </div>
      <button
        onClick={() => setFormOpen(!formOpen)}
        className="btn btn-neutral text-white fixed bottom-4 right-4"
      >
        {formOpen ? 'Close Form' : 'Create Event'}
      </button>
      <div className="w-2/6 px-8 pt-4">
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <EventForm
                key={selectedEvent ? selectedEvent.id : 'new'}
                setFormOpen={setFormOpen}
                onCreateEvent={handleCreateEvent}
                selectedEvent={selectedEvent}
                onUpdateEvent={handleUpdateEvent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
