import { _fetchWithAuth } from "./_fetchWithAuth"
import { baseUrl } from "./baseUrl"

async function toggleUpVoteThread(threadId) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/up-vote`, {
        method: 'POST',
    });

    const responseJson = await response.json();
    if (responseJson.status === 'success') {
        return responseJson.data.vote;
    }

    else {
        throw new Error(responseJson.message);
    }

}

export { toggleUpVoteThread }