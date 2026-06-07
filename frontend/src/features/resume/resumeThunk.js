import { createAsyncThunk,  } from "@reduxjs/toolkit";
import { API } from "../../service/API";

const postResumedata = createAsyncThunk("/resume", async(data,{rejectWithValue})=>{
 try{
  const res= await API.post("/resume/report",data)
  return res.data.user
 }catch(e){
     return rejectWithValue(
        e.response?.data?.message ||
        e.message ||
        "Failed to follow user"
      );
 }
})

export {
    postResumedata
}