import { useEffect } from "react";
import { fetchMovieCard } from "../store/slices/movieCardSlice";
import { fetchMovieDetails } from "../store/slices/movieDetailsSlice";
import { fetchMovies } from "../store/slices/searchSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { useAppSelector, useAppDispatch } from "./reduxHook";

type SelectorFn<T> = (state: RootState) => T;

const useFetchData = <T>(
  selector: SelectorFn<T>,
  id: string | null | undefined,
  searchQuery: string | null
) => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    } else if (searchQuery !== null) {
      dispatch(fetchMovies(searchQuery));
    } else {
      dispatch(fetchMovieCard());
    }
  }, [dispatch, id, searchQuery]);
  const stateData = useAppSelector(selector);

  return stateData;
};

export default useFetchData;
