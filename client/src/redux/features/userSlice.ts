import { createSlice } from "@reduxjs/toolkit"

type userData = {
    username: string
    emailUser: string
    descritionPlaylist: string
}


const initialState: userData = {
    username: "",
    emailUser: "",
    descritionPlaylist: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setInfoDataUser: (state, action) => {
            state.username = action.payload.username

            state.emailUser = action.payload.emailUser

            state.descritionPlaylist = action.payload.descritionPlaylist
        }
    }
})

export const {setInfoDataUser} = userSlice.actions
export default userSlice.reducer