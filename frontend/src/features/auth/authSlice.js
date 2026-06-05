import { createSlice } from "@reduxjs/toolkit";
import { authlogin, authlogout, authRegister } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authlogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(authlogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(authlogout.rejected, (state) => {
        state.loading = false;
      })
      .addCase(authRegister.pending,(state)=>{
         state.loading = true;
      })
      .addCase(authRegister.fulfilled,(state,action)=>{
        state.loading = false,
        state.user= action.payload
      })
      .addCase(authRegister.rejected,(state)=>{
        state.loading = false;
      })
       .addCase(authlogin.pending,(state)=>{
         state.loading = true;
      })
      .addCase(authlogin.fulfilled,(state,action)=>{
        state.loading = false,
        state.user= action.payload
      })
      .addCase(authlogin.rejected,(state)=>{
        state.loading = false;
      })
  },
});

export default authSlice.reducer;