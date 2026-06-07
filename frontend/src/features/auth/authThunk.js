import { createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../service/API"

const authRegister = createAsyncThunk("register",async(user,{ rejectWithValue })=>{
  try{
   const res= await API.post(`/auth/register`,user)
    return res.data
  }catch(e){
     return rejectWithValue(
        e.response?.data?.message ||
        e.message ||
        "Failed to follow user"
      );
  }
})
const authlogin = createAsyncThunk("login",async(user,{ rejectWithValue })=>{
  try{
   const res= await API.post(`/auth/login`,user)
    return res.data
  }catch(e){
     return rejectWithValue(
        e.response?.data?.message ||
        e.message ||
        "Failed to follow user"
      );
  }
})
const authlogout = createAsyncThunk("logout",async( _,{ rejectWithValue })=>{
  try{
   const res= await API.get(`/auth/logout`)
    return res.data
  }catch(e){
     return rejectWithValue(
        e.response?.data?.message ||
        e.message ||
        "Failed to follow user"
      );
  }
})

export {
     authRegister,
     authlogin,
     authlogout
}