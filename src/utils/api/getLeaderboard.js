import { baseUrl } from "./baseUrl"

async function getLeaderboard() {
    const response = await fetch(`${baseUrl}/leaderboards`);
    const responseJson = await response.json();

    const { status, message } = responseJson
    if (status !== 'success') {
        throw new Error(message)
    }

    const { data } = responseJson

    return data.leaderboards
}

export { getLeaderboard }