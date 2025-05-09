import { addComment } from "../../utils/api/addComments"

const ActionType = {
    ADD_COMMENT: 'ADD_COMMENT',
    CLEAR_COMMENT: 'CLEAR_COMMENT'
}

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: comment
    }
}

function clearCommentsActionCreator() {
    return {
        type: ActionType.CLEAR_COMMENT
    }
}

function asyncAddComment({ content, threadId }) {
    return async (dispatch) => {
        try {
            const comment = await addComment({ content, threadId })
            dispatch(addCommentActionCreator(comment));
        }
        catch (error) {
            console.log(error.message)
        }
    }
}

export { ActionType, asyncAddComment, clearCommentsActionCreator }