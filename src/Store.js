import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Slices/auth.slice';
import GameSlice from "./Slices/game.slice";

const rootReducer = combineReducers({
    auth: AuthReducer,
    game: GameSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export default store;