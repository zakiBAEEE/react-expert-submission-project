import { baseUrl } from './baseUrl';
async function getAllUsers() {
  const response = await fetch(`${baseUrl}/users`);

  const responseJson = await response.json();

  const { status, message } = responseJson;

  if (status !== 'success') {
    throw new Error(message);
  }

  const { data: { users } } = responseJson;

  return users;
}

export { getAllUsers };