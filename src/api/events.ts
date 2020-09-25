import { Event } from '../types/domain';

export async function fetchEvents(): Promise<Array<Event>> {
  const response = await fetch('https://localhost:5001/api/event');
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch events: ${response.statusText}.`);
}
