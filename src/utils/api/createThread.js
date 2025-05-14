import { _fetchWithAuth } from './_fetchWithAuth';
import { baseUrl } from './baseUrl';

async function createThread({ title, body, category }) {
  const response = await _fetchWithAuth(`${baseUrl}/threads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, category })
  });

  const responseJson = await response.json();

  if (responseJson.status == 'success') {
    return responseJson.data.thread;
  }

  else {
    throw new Error(responseJson.message);
  }
}

export { createThread };