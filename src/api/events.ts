import { Event } from 'src/types/domain';
import { getEnvironmentVariables } from 'src/utils/env';

const API_URL = getEnvironmentVariables().apiUrls.madLearning;

export async function fetchEvents(): Promise<Array<Event>> {
  const response = await fetch(`${API_URL}/api/event`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch events: ${response.statusText}.`);
}

export async function fetchEvent(id: string): Promise<Event> {
  const response = await fetch(`${API_URL}/api/event/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch event: ${response.statusText}.`);
}

export async function createEvent(
  starttime: string,
  endtime: string,
  name: string,
  description: string,
  imageUrl: string,
  imageAlt: string,
  location: string,
  firstName: string,
  lastName: string,
  email: string
): Promise<void> {
  const response = await fetch(`${API_URL}/api/Event`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      starttime: starttime,
      endtime: endtime,
      name: name,
      description: description,
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      location: location,
      owner: {
        id: '5f747809885eeb66847e7726', //TODO remove
        firstName,
        lastName,
        email,
      },
      participants: [],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create event: ${response.statusText}.`);
  }
}
