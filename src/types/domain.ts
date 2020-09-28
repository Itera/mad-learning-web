export type Event = {
  id: string;
  time: string;
  name: string;
  description: string;
  location: string;
  image: string;
  imageAlt: string;
  owner?: Person;
  participants?: Array<Person>;
};

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
