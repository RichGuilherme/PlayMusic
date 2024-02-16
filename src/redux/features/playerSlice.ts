import { createSlice } from "@reduxjs/toolkit"

interface player {
    currentSongs: {
        musics: songData[];
    }
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
    currentSongs: {
        musics: [],
    },
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {
        _id: "",
        user_id: "",
        title: "",
        artist: "",
        duration: 0,
        thumbnail: "",
        storage_url: "",
    },
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song

            if (action.payload?.data) {
                state.currentSongs = action.payload.data;
            }

            state.currentIndex = action.payload.i;
        },

        nextSong: (state, action) => {
            state.activeSong = state.currentSongs.musics[action.payload]


            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action) => {
            state.activeSong = state.currentSongs.musics[action.payload]

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload
        },

        activePlay: (state, action) => {
            state.isActive = action.payload
        },

    },
})

export const { setActiveSong, nextSong, prevSong, playPause, activePlay } = playerSlice.actions;

export default playerSlice.reducer;