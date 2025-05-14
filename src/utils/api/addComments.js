import { _fetchWithAuth } from './_fetchWithAuth';
import { baseUrl } from './baseUrl';

async function addComment({ content, threadId }) {

  const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  });

  const responseJson = await response.json();

  const { status, message } = responseJson;

  if (status === 'success') {
    return responseJson.data;
  }

  throw new Error(message);
}

export { addComment };