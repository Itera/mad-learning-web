import { authToken } from '../config/auth';

type FetchParams = Parameters<typeof fetch>;

export async function authFetch(
  url: FetchParams[0],
  options: FetchParams[1] = undefined
): Promise<Response> {
  if (!options)
    options = { method: 'GET' };

  return await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
      Authorization: 'Bearer ' + authToken!.accessToken,
    },
  });
}
