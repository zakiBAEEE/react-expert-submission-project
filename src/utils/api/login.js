import { baseUrl } from './baseUrl'

async function login(email, password) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const responseJson = await response.json();

    if (responseJson.status === 'success') {
        return responseJson.data.token;
    }

    throw new Error(responseJson.message);
}

export { login }