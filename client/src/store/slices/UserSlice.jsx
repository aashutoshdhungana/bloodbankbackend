import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem('userState') ? JSON.parse(localStorage.getItem('userState')) : null,
    isLoggedIn: localStorage.getItem('userState') != null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        updateUserData: (state, action) => {
            state.user = action.payload;
        },
        deleteUserData: (state) => {
            state.user = null;
        }
    }
});

export const { logIn, logOut, updateUserData, deleteUserData }  = userSlice.actions;
export default userSlice.reducer;