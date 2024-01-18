import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/features/counter';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
