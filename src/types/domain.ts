export type Event = {
  id: string;
  startTime: string;
  endTime: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  eventType: string;
  eventStatus: string;
  owner?: Person;
  participants?: Array<Person>;
};

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
