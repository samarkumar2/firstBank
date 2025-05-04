import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { cardDetails } from "../JSON/JsonData";
const initialState = {
    cardDetails: [
      {
        number: "1234 1231 3453 2456",
        name: "samar",
        expiry: "12/29",
     
      },
      {
        number: "1234 1231 3453 3456",
        name: "samie",
        expiry: "12/30",
     
      },
      {
        number: "1234 1231 3453 2456",
        name: "samar",
        expiry: "12/29",
      
      },
    ],
    status: 'idle',
    error: null,
  };
export const fetchCardDetails = createAsyncThunk(
  "card/fetchCardDetails",
  async () => {
    const response = await fetch("../JSON/JsonData");
    const data = await response.json();
    console.log('data', data);
    return data;
  }
);

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCardDetail: (state, action) => {
      state.cardDetails.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCardDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchCardDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addCardDetail } = cardSlice.actions;

export default cardSlice.reducer;
