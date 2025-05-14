import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAIL:
    return action.payload.threadDetail;
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.VOTE_THREAD_DETAIL:
    return {
      ...threadDetail,
      upVotesBy: threadDetail.upVotesBy.includes(action.payload.authUser.id)
        ? threadDetail.upVotesBy.filter((userId) => userId !== action.payload.authUser.id)
        : [...threadDetail.upVotesBy, action.payload.authUser.id],
    };
  default:
    return threadDetail;
  }
}

export { threadDetailReducer };