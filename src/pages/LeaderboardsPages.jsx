import { useDispatch, useSelector } from 'react-redux';
import { LeaderboardList } from '../components/LeaderboardList';
import { useEffect } from 'react';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import React from 'react';

function LeaderboardsPages() {
  const leaderboards = useSelector((states) => states.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);


  return (
    <div className="flex justify-center items-center">
      <LeaderboardList leaderboards={leaderboards} />
    </div>
  );
}

export { LeaderboardsPages };