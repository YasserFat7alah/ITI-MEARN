import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : "theme",
    initialState: {
        current : localStorage.getItem('theme') || 'light',
        available : ['dark' , 'light' , 'system']
    },
    reducers: {
        changeTheme: (state, action) => {
           state.current = action.payload
        }
    }
})

export const { changeTheme } = themeSlice.actions; 

export default themeSlice.reducer;