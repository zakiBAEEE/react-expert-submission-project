import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getLeaderboard } from '../../utils/api/getLeaderboard';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD'
};


function receiveLeaderboardActionCreator(leaderboards = []) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards
    }
  };
}

function asyncReceiveLeaderboard() {

  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboards));
    } catch (error) {
      alert('Error ini terjadi di baris 23 leaderboard action ', error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveLeaderboard };
