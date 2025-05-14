// eslint-disable-next-line quotes
import { Typography } from "@material-tailwind/react";
import { FaComment, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

function LikeDislikeComment({ toggleKomentar, isBukaKomentar, upVotesHandler }) {
  const threadDetail = useSelector((state) => state.threadDetail);
  const { upVotesBy, downVotesBy, comments } = threadDetail;

  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="flex gap-1 justify-center">
        <Typography variant="small">{upVotesBy.length}</Typography>
        <FaThumbsUp className="cursor-pointer" onClick={upVotesHandler} />
      </div>
      <div className="flex gap-1 items-center">
        <Typography variant="small">{downVotesBy.length}</Typography>
        <FaThumbsDown className="cursor-pointer" />
      </div>
      <div className="flex gap-1 items-center">
        <Typography variant="small">{comments.length}</Typography>
        <FaComment className="cursor-pointer" onClick={() => toggleKomentar(isBukaKomentar)} />
      </div>
    </div>
  );
}

LikeDislikeComment.propTypes = {
  toggleKomentar : PropTypes.func,
  upVotesHandler : PropTypes.func,
  isBukaKomentar : PropTypes.bool,
};

export { LikeDislikeComment };