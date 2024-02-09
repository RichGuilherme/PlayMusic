import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../features/playerSlice'
import userSlice from "../features/userSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        user: userSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch