export type IUsers = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
};

export type IEvents = {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
  latitude?: number;
  longitude?: number;
  hostUid: string;
  attendees: IAttendees[];
  attendeeIds: string[];
};

export type IAttendees = {
  id: string;
  displayName: string;
  photoURL?: string;
  isHost?: boolean;
};
