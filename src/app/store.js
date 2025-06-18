import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../Components/features/car/carSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
