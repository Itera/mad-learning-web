import { Event } from '../types/domain';

export async function fetchEvents(): Promise<Array<Event>> {
  const response = await fetch('https://localhost:5001/api/event');
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch events: ${response.statusText}.`);
}

export async function createEvent(
  starttime: string,
  endtime: string,
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
      starttime: starttime,
      endtime: endtime,
      name: name,
      description: description,
      owner: {
        id: '5f747809885eeb66847e7726', //TODO remove
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
