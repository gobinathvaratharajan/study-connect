import type { IEvents } from '../../../lib/types';
import EventMember from './eventMember';

type Props = {
  event: IEvents;
};

export default function eventAttendee({ event }: Props) {
  const hosted = event.attendees.find(
    (attendee) => attendee.id === event.hostUid
  );

  return (
    <div className="card bg-base-100 shadow-sm w-ful">
      <div className="card-body">
        <div className="flex gap-3 items-center">
          <figure className="avatar w-12 rounded-xl">
            <img
              src={
                hosted?.photoURL ||
                'https://img.daisyui.com/images/profile/demo/distracted2@192.webp'
              }
              alt={hosted?.displayName || 'Unknown Host'}
            />
          </figure>
          <div>
            <h2 className="card-title">{event.title}</h2>
            <p className="text-sm text-neutral">
              Hosted by {hosted?.displayName || 'Unknown'}
            </p>
          </div>
        </div>
        <div className="bg-base-200 -mx-6 my-4 px-6 py-2 border-y border-neutral-100">
          <EventMember attendee={event.attendees} />
        </div>
      </div>
      <div className="card-actions flex px-4 py-2">
        <div className="flex flex-1">{event.description}</div>
        <button className="btn btn-neutral text-white">Join Now</button>
      </div>
    </div>
  );
}
