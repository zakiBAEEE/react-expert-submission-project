import PropTypes from "prop-types"
import { ThreadItem } from "./threadItem"

function ThreadList({ threads = [] }) {
    return (
        <div className="flex  flex-col w-3/6">
            {threads.map((thread) => (
                <ThreadItem key={thread.id} {...thread} />
            ))}
        </div>
    )
}

ThreadList.propTypes = {
    threads: PropTypes.array
}

export { ThreadList }