import { baseUrl } from './baseUrl';
import { _fetchWithAuth } from './_fetchWithAuth';


async function getOwnProfile() {
    const response = await _fetchWithAuth(`${baseUrl}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
        throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
}

export { getOwnProfile }