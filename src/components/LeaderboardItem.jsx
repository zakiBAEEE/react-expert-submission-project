import { Avatar, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import React from 'react';

function LeaderboardItem({ user, score }) {
  return (
    <ListItem className="flex justify-between">
      <div className="flex">
        <ListItemPrefix>
          <Avatar variant="circular" alt="candice" src={`${user.avatar}`} />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            {user.name}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {user.email}
          </Typography>
        </div>
      </div>

      <div className="mr-10">
        <Typography variant="h4">
          {score}
        </Typography>
      </div>

    </ListItem>
  );
}
LeaderboardItem.propTypes = {
  user: PropTypes.object,
  score : PropTypes.number,
};
export { LeaderboardItem };