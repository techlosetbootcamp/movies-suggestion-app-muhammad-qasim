import { useEffect } from "react";
import { fetchMovieCard } from "../../store/slices/movieCardSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { MovieCardState } from "../../types/types";

const useHomeFetch = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieCard());
  }, [dispatch]);

  const stateData = useAppSelector<MovieCardState>(
    (state: RootState) => state.movieCard
  );

  return stateData;
};

export default useHomeFetch;
