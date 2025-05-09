import { getAllUsers } from "../../utils/api/getAllUsers";
import { getAllThreads } from "../../utils/api/getAllThreads";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveAllUserActionCreator } from "../users/action";

function asyncPopulateUsersAndThreads() {
    return async (dispatch) => {
        try {
            const users = await getAllUsers();
            const threads = await getAllThreads();
            dispatch(receiveThreadsActionCreator(threads));
            dispatch(receiveAllUserActionCreator(users));
        } catch (error) {
            alert(error.message);
        }
    };
}

export { asyncPopulateUsersAndThreads }