import { AuthProviderInstance } from './auth';

type FetchParams = Parameters<typeof fetch>;

export async function authFetch(
  url: FetchParams[0],
  options: FetchParams[1] = undefined
): Promise<Response> {
  if (!options) options = { method: 'GET' };

  const apiToken = await AuthProviderInstance.getApiToken();
  if (!apiToken || !apiToken.accessToken)
    throw new Error('User is not authorized to call API');

  return await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
      Authorization: 'Bearer ' + apiToken.accessToken,
    },
  });
}
