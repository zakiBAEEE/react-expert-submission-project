import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { asyncReceiveThreadDetail, asyncToogleUpVoteThreadDetail, clearThreadDetailActionCreator } from "../states/threadDetail/action";
import { Avatar, Button, Card, Input, Typography } from "@material-tailwind/react";
import { postedAt } from "../utils";
import { LikeDislikeComment } from "../components/LikeDislikeComment";
import { KomentarList } from "../components/KomentarList";
import DOMPurify from "dompurify";
import { asyncAddComment, clearCommentsActionCreator } from "../states/comments/action";
import { useInput } from "../customHooks/useInput";

function DetailPage() {
    const dispatch = useDispatch();
    const threadDetail = useSelector((state) => state.threadDetail);
    const { id } = useParams();
    const [bukaComment, setIsBukaComment] = useState(true);
    const authUser = useSelector((state) => state.authUser);
    const komentar = useSelector((state) => state.comments);
    const [content, onChangeComment, setContent] = useInput();


    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
        return () => {
            dispatch(clearThreadDetailActionCreator());
            dispatch(clearCommentsActionCreator());
        };
    }, [dispatch, id]);

    if (threadDetail === null) {
        return <div>Loading...</div>;
    }

    const { title, body, createdAt, owner, comments: apiComments } = threadDetail;
    const totalKomentar = (apiComments || []).concat(komentar || []);

    const toggleBukaComment = () => setIsBukaComment((prev) => !prev);

    const upVotesHandler = () => {
        dispatch(asyncToogleUpVoteThreadDetail());
    }

    const onAddComment = () => {
        dispatch(asyncAddComment({ content, threadId: id }));
        dispatch(asyncReceiveThreadDetail(id));
        setContent("");
    };

    return (
        <div className="flex justify-center">
            <Card className="w-2/3 p-5 flex gap-3">
                <div className="flex gap-2 items-center">
                    <Avatar src={owner.avatar} />
                    <Typography variant="small" className="font-semibold text-lg">{owner.name}</Typography>
                    <Typography variant="small">{postedAt(createdAt)}</Typography>
                </div>
                <div>
                    <Typography variant="h3">{title}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }} />
                </div>
                <LikeDislikeComment toggleKomentar={toggleBukaComment} isBukaKomentar={bukaComment} jumlahKomentar={totalKomentar.length} upVotesHandler={upVotesHandler} />

                {bukaComment && (
                    <div>
                        {authUser && (
                            <div className="flex justify-between gap-2">
                                <Input placeholder="Apa Komentar Anda..." value={content} onChange={onChangeComment} />
                                <Button onClick={onAddComment}>Komen</Button>
                            </div>
                        )}
                        <div className="mt-2">
                            <Typography variant="h5">{`${totalKomentar.length} Komentar`}</Typography>
                            <div className="w-full h-[1px] bg-blue-gray-400 mt-1" />
                            <KomentarList komentars={totalKomentar} />
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}

export { DetailPage };


