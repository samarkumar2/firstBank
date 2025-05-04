import { createSlice } from "@reduxjs/toolkit";

export const empSlice = createSlice({
  name: "emp",
  initialState: [],
  reducers: {
    addEmp: (state, action) => {
      const initialFormData = action.payload;

      // Convert the object to a JSON string
      let userDataString = JSON.stringify(initialFormData);

      // Store the JSON string in local storage
      localStorage.setItem("userData", userDataString);

      return [...state, initialFormData];
    },
    removeEmp: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
  },
});
export const { addEmp, removeEmp } = empSlice.actions;

export default empSlice.reducer;
