import { getOwnProfile } from "../../utils/api/getOwnProfile"
import { setAuthUserActionCreator } from "../authUser/action";

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
}

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload
        }
    }
}

function asyncPreload() {
    return async (dispatch) => {
        try {
            const authUser = await getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            dispatch(setAuthUserActionCreator(null))
        } finally {
            dispatch(setIsPreloadActionCreator(false))
        }
    }
}


export { ActionType, setIsPreloadActionCreator, asyncPreload }