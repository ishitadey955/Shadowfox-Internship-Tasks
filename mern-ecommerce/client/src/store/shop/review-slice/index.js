import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
};

export const addReview = createAsyncThunk(
  "review/addReview",   // <-- better naming than "/order/addReview"
  async (formdata) => {
    const response = await axios.post(
      "http://localhost:5000/api/shop/review/add",
      formdata
    );
    return response.data; // should contain { success: true, data: review }
  }
);

export const getReviews = createAsyncThunk(
  "review/getReviews",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/review/${id}`
    );
    return response.data; // should contain { success: true, data: [reviews] }
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getReviews
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data || [];
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
      })

      // addReview
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.success) {
          // append new review to state
          state.reviews.push(action.payload.data);
        }
      })
      .addCase(addReview.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default reviewSlice.reducer;
