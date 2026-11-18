import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        IsLoggedIn: false,
        user: null
    },
    reducers: {
        userLoggedInDetail: (state, action) => {
            state.IsLoggedIn = true,
                state.user = action.payload;
        },
        userLoggedOutDetail: (state, action) => {
            state.IsLoggedIn = false,
                state.user = null;
        }
    }
})

export const {userLoggedInDetail, userLoggedOutDetail} = userSlice.actions;
export default userSlice.reducer