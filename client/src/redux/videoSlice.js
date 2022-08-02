import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentVideo: null,
    loading: false,
    error: false,
};

export const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        
    },
});

export const {  } =    videoSlice.actions;

export default videoSlice.reducer;