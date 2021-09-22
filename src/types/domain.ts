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
  teamsUrl: string;
  owner?: Person;
  participants?: Array<Person>;
  comments: Array<CommentData>;
  resourceLinks?: Array<ResourceLink>;
};

export type CommentData = {
  id: string;
  body: string;
  date: string;
  changedDate: string;
  byPerson: Person;
  replyToCommentId?: string;
  replyToPerson?: Person;
  children?: Array<CommentData>;
};

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type ResourceLink = {
  name: string;
  url: string;
}