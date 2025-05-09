import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./authUser/reducer";
import { isPreloadReducer } from "./isPreload/reducer";
import { threadsReducer } from "./threads/reducer";
import { threadDetailReducer } from "./threadDetail/reducer";
import { usersReducer } from "./users/reducer";
import { leaderboardReducer } from "./leaderboard/reducer"

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threadDetail: threadDetailReducer,
        threads: threadsReducer,
        users: usersReducer,
        leaderboards: leaderboardReducer
    }
})

export { store }