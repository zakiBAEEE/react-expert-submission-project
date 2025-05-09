import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { ThreadList } from "../components/ThreadList";
import { useLocation, useNavigate } from "react-router";
import { FaCirclePlus } from "react-icons/fa6"

function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const authUser = useSelector((states) => states.authUser)
    const threads = useSelector((states) => states.threads)
    const users = useSelector((states) => states.users)

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads())
    }, [dispatch, location])

    const threadsList = threads.map((thread) => {
        return ({
            ...thread,
            user: users.find((user) => user.id === thread.ownerId)
        })
    })
    return (
        <div className="flex flex-col justify-center items-center">
            <ThreadList threads={threadsList} />
            {authUser && <FaCirclePlus className="fixed bottom-11 right-12 w-11 h-11 cursor-pointer" onClick={() => navigate("/new")} />}
        </div>
    )
}

export { HomePage }