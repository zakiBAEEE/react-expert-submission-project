import { createThread } from "../../utils/api/createThread"
// import { getOwnProfile } from "../../utils/api/getOwnProfile"
// import { toggleUpVoteThread } from "../../utils/api/toggleUpVoteThread"

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    VOTE_THREAD: 'VOTE_THREAD'
}

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads
        }
    }
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread
        }
    }
}

function voteThreadActionCreator(threadId, userId) {
    return {
        type: ActionType.VOTE_THREAD,
        payload: {
            threadId,
            userId
        }
    }
}


function asyncAddThread({ title, body, category = '#general' }) {
    return async (dispatch) => {
        try {
            const thread = await createThread({ title, body, category });
            dispatch(addThreadActionCreator(thread));
        } catch (error) {
            alert(error.message);
        }
    }
}




export { ActionType, receiveThreadsActionCreator, addThreadActionCreator, voteThreadActionCreator, asyncAddThread }