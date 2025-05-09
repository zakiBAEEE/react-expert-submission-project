import { getOwnProfile } from '../../utils/api/getOwnProfile'
import { login } from '../../utils/api/login'
import { putAccessToken } from '../../utils/api/putAccessToken'
const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
}

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser
        }
    }
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null
        }
    }
}

// Digunakan ketika user login
function asynSetAuthUser({ email, password }) {
    return async (dispatch) => {
        try {
            const token = await login(email, password);
            putAccessToken(token);
            const authUser = await getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(`${error.message} Error di asycn auth user`);
        }

    }
}

function asynUnsetAuthUser() {
    return (dispatch) => {
        dispatch(unsetAuthUserActionCreator());
        putAccessToken('');
    }
}

export { ActionType, setAuthUserActionCreator, unsetAuthUserActionCreator, asynSetAuthUser, asynUnsetAuthUser }