import {
  List,
  Card,
  Typography,
} from '@material-tailwind/react';
import { LeaderboardItem } from './LeaderboardItem';
import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardList({ leaderboards }) {
  return (
    <Card className="w-3/5 flex flex-col gap-y-1">
      <div className="flex justify-between p-7">
        <Typography variant="h4">
                    Pengguna
        </Typography>
        <Typography variant="h4" className="mr-10">
                    Skor
        </Typography>
      </div>
      <List>
        {
          leaderboards.map((item) => {
            return (<LeaderboardItem {...item} key={item.user.id} />);
          })
        }
      </List>
    </Card>
  );
}
LeaderboardList.propTypes = {
  leaderboards : PropTypes.array,
};
export { LeaderboardList };