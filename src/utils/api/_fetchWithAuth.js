import { getAccessToken } from "./getAccessToken"

function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    })
}

export { _fetchWithAuth }