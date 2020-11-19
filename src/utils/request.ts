import Authentication from '../config/auth';

type FetchParams = Parameters<typeof fetch>;

export async function authFetch(
  url: FetchParams[0],
  options: FetchParams[1]
): Promise<Response> {
  const tokenResponse = await Authentication.getToken();
  return await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
      Authorization: 'Bearer ' + tokenResponse.accessToken,
    },
  });
}
