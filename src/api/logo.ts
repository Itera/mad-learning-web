export async function fetchLogo(url: string): Promise<string> {
  const hostName = new URL(url).hostname;
  const imgUrl = `//logo.clearbit.com/${hostName}?size=32`;
  const response = await fetch(imgUrl);

  if (response.ok) {
    return response.url;
  }

  throw new Error(`Failed to fetch logo: ${response.statusText}`);
}
