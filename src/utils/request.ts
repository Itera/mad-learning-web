import Authentication from "../config/auth";

type FetchParams = Parameters<typeof fetch>;
type FetchReturn = ReturnType<typeof fetch>;

export async function authFetch(url: FetchParams[0], options: FetchParams[1]): FetchReturn{
    const tokenResponse = await Authentication.getToken();
    return await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenResponse.accessToken,
          },
    });
}
