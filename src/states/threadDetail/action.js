import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getThreadDetail } from '../../utils/api/getThreadDetail';
import { neutralizedVoteThread } from '../../utils/api/neutralizedVoteThread';
import { toggleUpVoteThread } from '../../utils/api/toggleUpVoteThread';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
    VOTE_THREAD_DETAIL: 'VOTE_THREAD_DETAIL'
}

function receiveThreadDetailActionCreator(threadDetail) {
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            threadDetail
        }
    }
}

function clearThreadDetailActionCreator() {
    return {
        type: ActionType.CLEAR_THREAD_DETAIL
    }
}

function toggleUpVoteThreadDetail(authUser) {
    return {
        type: ActionType.VOTE_THREAD_DETAIL,
        payload: {
            authUser
        }
    };
}

function asyncReceiveThreadDetail(threadId) {

    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threadDetail = await getThreadDetail(threadId);
            dispatch(receiveThreadDetailActionCreator(threadDetail))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading());
    }
}


function asyncToogleUpVoteThreadDetail() {
    return async (dispatch, getState) => {
        const { authUser, threadDetail } = getState();
        dispatch(toggleUpVoteThreadDetail(authUser));

        try {
            const isUpVote = threadDetail.upVotesBy.includes(authUser.id);

            if (isUpVote) {
                await neutralizedVoteThread(threadDetail.id);
            }
            else {
                await toggleUpVoteThread(threadDetail.id);
            }
        }

        catch (error) {
            alert(error.message);
        }
    };
}

export { ActionType, receiveThreadDetailActionCreator, clearThreadDetailActionCreator, asyncReceiveThreadDetail, toggleUpVoteThreadDetail, asyncToogleUpVoteThreadDetail }