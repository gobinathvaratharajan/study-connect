import { users } from '../../../lib/data/sampleData';
import type { IEvents } from '../../../lib/types';

type Props = {
  setFormOpen?: (open: boolean) => void;
  onCreateEvent: (event: any) => void;
  onUpdateEvent?: (event: IEvents) => void;
  selectedEvent?: IEvents | null;
};

export default function EventForm({
  setFormOpen,
  onCreateEvent,
  selectedEvent,
  onUpdateEvent,
}: Props) {
  const initialValue = selectedEvent ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };
  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    if (selectedEvent) {
      onUpdateEvent({
        ...selectedEvent,
        ...data,
      });
      setFormOpen(false);
      console.log('Event updated:', { ...selectedEvent, ...data });
      return;
    } else {
      onCreateEvent({
        ...data,
        id: crypto.randomUUID(),
        hostUid: users[0].uid,
        attendees: [
          {
            id: users[0].uid,
            displayName: users[0].displayName,
            photoURL: users[0].photoURL,
            isHost: true,
          },
        ],
      });
    }
    console.log('Form submitted:', data);
  };
  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 shadow-sm w-full fixed max-w-md z-50">
      <h3 className="text-2xl text-center font-semibold">
        {selectedEvent ? 'Edit Event' : 'Create Event'}
      </h3>
      <form action={onSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          placeholder="Event title"
          className="input input-md w-full"
          defaultValue={initialValue.title}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input input-md w-full"
          defaultValue={initialValue.category}
        />
        <textarea
          name="description"
          className="textarea textarea-lg w-full"
          placeholder="Description"
          defaultValue={initialValue.description}
        />
        <input
          type="datetime-local"
          name="date"
          placeholder="Date"
          className="input input-md w-full"
          defaultValue={
            initialValue.date ? new Date().toISOString().slice(0, 16) : ''
          }
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="input input-md w-full"
          defaultValue={initialValue.city}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          className="input input-md w-full"
          defaultValue={initialValue.venue}
        />
        <div className="flex justify-end w-full gap-2 mt-4">
          <button onClick={() => setFormOpen(false)} className="btn">
            Cancel
          </button>
          <button type="submit" className="btn btn-neutral text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
