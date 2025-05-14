import { baseUrl } from './baseUrl';

async function register({ name, email, password }) {
  const response = await fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  const responseJson = await response.json();

  if (responseJson.status === 'success') {
    console.log('Register Berhasil');
    console.log(responseJson);
    return responseJson.data.user;
  }

  else {
    alert('GAGAL LOGIN COYY');
    // throw new Error(responseJson.message);

  }
}

export { register };