import { configureStore } from '@reduxjs/toolkit';
import userDeatialsReducer from "../feature/UserDeatialsSlice"

export const store = configureStore({
    reducer : {
        data : userDeatialsReducer
    }
})