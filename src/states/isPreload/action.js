import { hideLoading, showLoading } from "react-redux-loading-bar";
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
        dispatch(showLoading())
        try {
            const authUser = await getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            dispatch(setAuthUserActionCreator(null))
        } finally {
            dispatch(setIsPreloadActionCreator(false))
        }
        dispatch(hideLoading());
    }
}


export { ActionType, setIsPreloadActionCreator, asyncPreload }