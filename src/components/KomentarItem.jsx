import { Avatar, Typography } from "@material-tailwind/react"
import { postedAt } from "../utils"
import DOMPurify from "dompurify";
import { LikeDislikeComment } from "./LikeDislikeComment";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function KomentarItem({ content, createdAt, owner, upVotesBy, downVotesBy }) {
    const sanitizedContent = DOMPurify.sanitize(content);
    return (
        <div className="flex flex-col gap-3 mt-3">
            <div className="flex gap-2 items-center">
                <Avatar src={`${owner.avatar}`} />
                <Typography variant="small" className="font-semibold">{owner.name}</Typography>
                <Typography variant="small">{postedAt(createdAt)}</Typography>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
            <div className="flex flex-row gap-3 items-center">
                <div className="flex gap-1 justify-center">
                    <Typography variant="small">{`${upVotesBy.length}`}</Typography>
                    <FaThumbsUp className="cursor-pointer" />
                </div>
                <div className="flex gap-1 items-center">
                    <Typography variant="small">{`${downVotesBy.length}`}</Typography>
                    <FaThumbsDown className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export { KomentarItem }