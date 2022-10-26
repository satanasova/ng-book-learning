import { combineReducers, Reducer } from "redux";
import { ThreadsReducer, ThreadsState } from "./thread/thread.reducer";
import { UsersState, UsersReducer } from "./user/user.reducer";


export interface AppState {
    users: UsersState;
    threads: ThreadsState;
}

// const rootReducer: Reducer<AppState> = combineReducers<AppState>({
//     // users: UsersReducer,
//     // threads: ThreadsReducer
// });

const rootReducer = combineReducers({
    users: UsersReducer,
    threads: ThreadsReducer
})

export default rootReducer;

