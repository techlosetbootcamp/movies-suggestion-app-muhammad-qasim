import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../instance/axiosInstance";
import {
  MovieDetailsData,
  SimilarMovies,
  Trailer,
  MovieDetailsState,
  FetchMovieDetailsPayload,
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig,
} from "../../types/types";
import { AxiosResponse } from "axios";

const initialState: MovieDetailsState = {
  isLoading: false,
  isError: null,
  details: null,
  trailer: null,
  similarMovies: null,
};

export const fetchMovieDetails = createAsyncThunk<
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig
>("movieDetails/fetchMovieDetails", async (id: string, { rejectWithValue }) => {
  try {
    const movieDetailsResponse: AxiosResponse<MovieDetailsData> =
      await AxiosInstance.get<MovieDetailsData>(`/movie/${id}`);
    const trailerResponse: AxiosResponse<{ results: Trailer[] }> =
      await AxiosInstance.get<{ results: Trailer[] }>(`/movie/${id}/videos`);
    const similarMoviesResponse: AxiosResponse<{ results: SimilarMovies[] }> =
      await AxiosInstance.get<{ results: SimilarMovies[] }>(
        `/movie/${id}/similar`
      );

    const videos: Trailer[] = trailerResponse.data.results;
    const movieDetailsData: MovieDetailsData = movieDetailsResponse.data;
    const similarMovies: SimilarMovies[] = similarMoviesResponse.data.results;

    const trailer =
      videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      ) || null;
    const trailerData = trailer ? [trailer] : [];

    return { movieDetailsData, trailerData, similarMovies };
  } catch (err: any) {
    if (err.response) {
      const data = err.response.data;
      return rejectWithValue({
        message: data.status_message,
        statusCode: data.status_code,
      });
    } else if (err.request) {
      return rejectWithValue({
        message: "Network error",
        statusCode: 500,
      });
    } else {
      return rejectWithValue({
        message: err.message,
        statusCode: 500,
      });
    }
  }
});

export const MovieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const payload = action.payload as FetchMovieDetailsPayload;
        state.details = payload.movieDetailsData;
        state.trailer = payload.trailerData;
        state.similarMovies = payload.similarMovies;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.isError = action.payload;
        } else {
          state.isError = {
            message: action.error.message || "Unknown error",
            statusCode: 500,
          };
        }
      });
  },
});

export default MovieDetailsSlice.reducer;
