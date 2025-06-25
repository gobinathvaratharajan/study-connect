import EventAttendee from '../dashboard/eventAttendee';
import EventForm from '../form/eventform';
import Sidebar from '../../sidebar';
import { events } from '../../../lib/data/sampleData';
import { useState } from 'react';

export default function EventDashboard() {
  const [formOpen, setFormOpen] = useState(true);

  return (
    <div className="flex flex-row bg-gray-50 justify-between w-full">
      <div className="w-1/6 pt-2 border-r-2 pr-6 border-r-gray-100">
        <Sidebar />
      </div>
      <div className="w-3/6 flex flex-col px-8 gap-4 pt-4">
        {events.map((event) => {
          return <EventAttendee key={event.id} event={event} />;
        })}
      </div>
      <div className="w-2/6 px-8 pt-4">
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </div>
    </div>
  );
}
