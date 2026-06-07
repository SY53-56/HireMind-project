import { createSlice } from "@reduxjs/toolkit";
import { postResumedata } from "./resumeThunk";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resumeDatas: [],
    resume: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postResumedata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postResumedata.fulfilled, (state, action) => {
        state.loading = false;
        state.resume = action.payload;

        state.resumeDatas.push(action.payload);
      })
      .addCase(postResumedata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;