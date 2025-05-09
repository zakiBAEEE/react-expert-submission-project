import { ActionType } from "./action";

function commentsReducer(comments = [], action = {}) {
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            return [...comments, action.payload]
        case ActionType.CLEAR_COMMENT:
            return []
        default:
            comments
    }
}

export { commentsReducer }