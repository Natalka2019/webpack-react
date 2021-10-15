import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const RootReducer = combineReducers({ movieReducer });

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
