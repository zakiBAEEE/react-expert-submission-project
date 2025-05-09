import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [...threads, action.payload.thread];
        case ActionType.VOTE_THREAD:
            return threads.map((thread) => {
                if (thread.id === action.payload.talkId) {
                    return {
                        ...thread,
                        likes: thread.likes.includes(action.payload.userId) ? thread.likes.filter((id) => id !== action.payload.userId) : thread.likes.concat([action.payload.userId])
                    };
                }
            });
        default:
            return threads;
    }
}

export { threadsReducer }