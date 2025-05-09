import { register } from "../../utils/api/register"

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS'
}

function receiveAllUserActionCreator(users) {
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users
        }
    }
}

async function asyncRegisterUser({ name, email, password }) {
    try {
        await register({ name, email, password })
    } catch (error) {
        alert(error.message)
    }
}

export { ActionType, receiveAllUserActionCreator, asyncRegisterUser }