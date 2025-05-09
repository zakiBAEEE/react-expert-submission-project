import { baseUrl } from "./baseUrl"

async function getThreadDetail(threadId) {
    const response = await fetch(`${baseUrl}/threads/${threadId}`)
    const responseJson = await response.json();

    if (responseJson.status === 'success') {
        return responseJson.data.detailThread
    }

    else {
        throw new Error(responseJson.message);
    }
}

export { getThreadDetail }