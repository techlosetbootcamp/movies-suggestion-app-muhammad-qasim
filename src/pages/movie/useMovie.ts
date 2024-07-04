import { useEffect } from "react";
import { fetchMovieDetails } from "../../store/slices/movieDetailsSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { MovieDetailsState } from "../../types/types";

const useMovieFetch = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== undefined && id !== "") {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  const stateData = useAppSelector<MovieDetailsState>(
    (state: RootState) => state.movieDetails
  );

  return stateData;
};

export default useMovieFetch;
