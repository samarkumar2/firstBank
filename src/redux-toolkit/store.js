import { configureStore } from '@reduxjs/toolkit';
import empReducer from './EmpSlice.js';
import cardReducer from './cardSlice.js'
export default configureStore({
    reducer: {
      emps: empReducer,
      detail:cardReducer
    },
  });