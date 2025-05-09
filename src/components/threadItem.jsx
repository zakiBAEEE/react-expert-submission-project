import PropTypes from "prop-types"
import { useNavigate } from "react-router"
import { postedAt } from "../utils"
import { useState } from "react";
import { LikeDislikeComment } from "./LikeDislikeComment";
import { Typography } from "@material-tailwind/react";
import DOMPurify from "dompurify";
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";


function ThreadItem({ id, title, body, user, createdAt, upVotesBy, downVotesBy, totalComments }) {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const bodySanitized = DOMPurify.sanitize(body);

    const onClickedTitle = () => {
        navigate(`thread/${id}`);
        setIsClicked(true)
    }
    return (
        <div className="">
            <div className=" border-gray-400 border-b-2 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-full" src={`${user.avatar}`} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none font-semibold">{user.name}</p>
                    </div>
                    <Typography variant="small" className="font-thin">{postedAt(createdAt)}</Typography>
                </div>
                <div>
                    <div className={`font-bold text-xl mb-2 cursor-pointer  ${isClicked ? 'text-purple-700' : 'text-blue-700'}`} onClick={() => onClickedTitle()}>{title}</div>
                    <div dangerouslySetInnerHTML={{ __html: bodySanitized }}></div>
                </div>
                <div className="mt-3 flex flex-row gap-3">
                    <div className="flex gap-1 justify-center">
                        <Typography variant="small">{upVotesBy.length}</Typography>
                        <FaThumbsUp />
                    </div>
                    <div className="flex gap-1 items-center">
                        <Typography variant="small">{downVotesBy.length}</Typography>
                        <FaThumbsDown />
                    </div>
                    <div className="flex gap-1 items-center">
                        <Typography variant="small">{totalComments}</Typography>
                        <FaComment />
                    </div>

                </div>
            </div>
        </div>
    )
}

ThreadItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    createdAt: PropTypes.string
}

export { ThreadItem }