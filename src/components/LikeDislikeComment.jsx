import { Typography } from "@material-tailwind/react"
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa"
import { useSelector } from "react-redux"

function LikeDislikeComment({ toggleKomentar, isBukaKomentar, upVotesHandler }) {
    const threadDetail = useSelector((state) => state.threadDetail);
    const { upVotesBy, downVotesBy, comments } = threadDetail;
    const authUser = useSelector((state) => state.authUser);
    const isUpVote = upVotesBy.includes(authUser.id);

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
    )
}

export { LikeDislikeComment }