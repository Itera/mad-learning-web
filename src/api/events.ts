import { Event } from '../types/domain';

export async function fetchEvents(): Promise<Array<Event>> {
  const response = await fetch('https://localhost:5001/api/event');
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch events: ${response.statusText}.`);
}

export async function createEvent(
  time: string,
  name: string,
  description: string,
  firstName: string,
  lastName: string,
  email: string
): Promise<Boolean> {
  // TODO fix url in env variable
  const response = await fetch('https://localhost:5001/api/Event', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      time: time,
      name: name,
      description: description,
      owner: {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      participants: [],
    }),
  });
  if (response.ok) {
    return true;
  }
  return false;
  // throw new Error(`Failed to create event: ${response.statusText}.`);
}
