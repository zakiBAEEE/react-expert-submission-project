import { baseUrl } from './baseUrl';

async function getAllThreads() {
  const response = await fetch(`${baseUrl}/threads`);
  const responseJson = await response.json();

  if (responseJson.status === 'success') {
    return responseJson.data.threads;
  }
  else {
    throw new Error(responseJson.message);
  }
}

export { getAllThreads };