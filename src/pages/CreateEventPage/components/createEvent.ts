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
    mode: 'cors',
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
  throw new Error(`Failed to create event: ${response.statusText}.`);
}

export default createEvent;
