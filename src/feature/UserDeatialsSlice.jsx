import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const API_URL = 'http://localhost:4040/users';

export const fetchData = createAsyncThunk("getData", async () => {
        try{
            const response = await axios.get(API_URL);
            return response.data
        }
        catch(error){
            console.log("Error", error)
        }
})

export const createData = createAsyncThunk("createData" , async (newData) => {
    try{
        const response = await axios.post(API_URL,newData)
        return response.data
    }  catch(error){
        console.log("Error", error)
    }
})

export const updateData = createAsyncThunk ("updateData" , async (updatedData) => {
    try{
        const response = await axios.put(`${API_URL}/${updatedData.id}`,updatedData)
        return response.data
    }  catch(error){
        console.log("Error", error)
    }
})

export const deleteData = createAsyncThunk ("deleteData" , async (id) => {
    try{
        const response = await axios.delete(`${API_URL}/${id}`)
        return response.data
    }  catch(error){
        console.log("Error", error)
    }
})

const userDeatials = createSlice({
    name : 'data',
    initialState:{
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

          
          .addCase(createData.fulfilled, (state,action) => {
            state.data.push(action.payload);
          })

        
          .addCase(updateData.fulfilled, (state, action) => {
            const index = state.items.findIndex((post) => post.id === action.payload.id);
            state.data[index] = action.payload;
          })

          
          .addCase(deleteData.fulfilled, (state, action) => {
            state.data = state.data.filter((post) => post.id !== action.payload);
          })
    }
})

export default userDeatials.reducer;