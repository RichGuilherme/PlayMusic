import { createSlice } from "@reduxjs/toolkit"

interface player {
    currentSongs: songData[],
    currentIndex: number,
    isActive: boolean,
    isPlaying: boolean,
    activeSong: {
        _id: string,
        user_id: string,
        title: string,
        artist: string,
        duration: number,
        thumbnail: string,
        storage_url: string,
    } 
}

export type songData = {
    _id: string,
    user_id: string,
    title: string,
    artist: string,
    duration: number,
    thumbnail: string,
    storage_url: string,
}

const initialState: player = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;

            if (action.payload?.data) {
                state.currentSongs = action.payload.data;
            }

            state.currentIndex = action.payload.i;
            state.isActive = true;
        },

        nextSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },
    },
})

export const { setActiveSong, nextSong, prevSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;