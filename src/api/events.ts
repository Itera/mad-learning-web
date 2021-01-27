import { Event } from 'src/types/domain';
import { authFetch } from '../utils/request';
import { getEnvironmentVariables } from 'src/utils/env';
import { AuthProviderInstance } from 'src/utils/auth';

const API_URL = getEnvironmentVariables().apiUrls.madLearning;

export async function fetchEvents(
  from?: Date,
  to?: Date,
  limit?: number
): Promise<Array<Event>> {
  let query: any = {};

  if (from) query['from'] = from.toISOString();
  if (to) query['to'] = to.toISOString();
  if (limit) query['limit'] = limit.toString();

  const response = await authFetch(
    `${API_URL}/api/event?${new URLSearchParams(query).toString()}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch events: ${response.statusText}.`);
}

export async function fetchEvent(id: string): Promise<Event> {
  const response = await authFetch(`${API_URL}/api/event/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Failed to fetch event: ${response.statusText}.`);
}

export async function joinEvent(id: string): Promise<void> {
  const response = await authFetch(`${API_URL}/api/event/${id}/rsvp`, {
    method: 'PUT',
  });
  if (response.ok) {
    return;
  }
  throw new Error(`Failed to join event: ${response.statusText}.`);
}

export async function dropEvent(id: string): Promise<void> {
  const response = await authFetch(`${API_URL}/api/event/${id}`, {
    method: 'PATCH',
    body: 'DROP',
  });
  if (response.ok) {
    return;
  }
  throw new Error(`Failed to drop event: ${response.statusText}.`);
}

export async function createEvent(
  starttime: string,
  endtime: string,
  name: string,
  description: string,
  imageUrl?: string,
  imageAlt?: string,
  location?: string,
  eventType?: string
): Promise<void> {
  const account = AuthProviderInstance.account;
  const accountName = AuthProviderInstance.accountName;

  const response = await authFetch(`${API_URL}/api/Event`, {
    method: 'POST',
    body: JSON.stringify({
      starttime: starttime,
      endtime: endtime,
      name: name,
      description: description,
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      location: location,
      eventType: eventType,
      owner: {
        // TODO: can be filled in API side unless you can create an event with an owner that is not current user
        id: account!.localAccountId,
        firstName: accountName.firstName,
        lastName: accountName.lastName,
        email: account!.username,
      },
      participants: [],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create event: ${response.statusText}.`);
  }
}

export async function deleteEvent(id: string): Promise<void> {
  const response = await authFetch(`${API_URL}/api/event/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return;
  }
  throw new Error(`Failed to delete event: ${response.statusText}.`);
}

export async function updateEvent(
  id: string,
  starttime: string,
  endtime: string,
  name: string,
  description: string,
  eventType: string,
  imageUrl?: string,
  imageAlt?: string,
  location?: string
): Promise<void> {
  const response = await authFetch(`${API_URL}/api/event/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      starttime: starttime,
      endtime: endtime,
      name: name,
      description: description,
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      location: location,
      eventType: eventType,
    }),
  });
  if (response.ok) {
    return;
  }
  throw new Error(`Failed to update event: ${response.statusText}.`);
}
