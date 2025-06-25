import type { IAttendees } from '../../../lib/types';

type Props = {
  attendee: IAttendees[];
};

export default function eventMember({ attendee }: Props) {
  return (
    <div className="avatar-group -space-x-6">
      {attendee.map((attendee: IAttendees) => (
        <div className="avatar" key={attendee.id}>
          <div className="w-12">
            <img
              src={
                attendee.photoURL ||
                'https://img.daisyui.com/images/profile/demo/distracted2@192.webp'
              }
              alt={attendee.displayName}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
