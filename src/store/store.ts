import { configureStore } from "@reduxjs/toolkit";
import MovieCardSlice from "./slices/movieCardSlice";
import MovieDetailsSlice from "./slices/movieDetailsSlice";
import SearchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    movieCard: MovieCardSlice,
    search: SearchSlice,
    movieDetails: MovieDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
