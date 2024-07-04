import { useEffect } from "react";
import { fetchMovieCard } from "../../store/slices/movieCardSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { MovieCardState } from "../../types/types";

const useHomeFetch = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovieCard());
    };

    fetchData();
  }, [dispatch]);

  const stateData = useAppSelector(
    (state: RootState): MovieCardState => state.movieCard
  );

  return {
    isLoading: stateData.isLoading,
    isError: stateData.isError,
    popularMovies: stateData.popularMovies,
    trendingMovies: stateData.trendingMovies,
    releasesMovies: stateData.releasesMovies,
  };
};

export default useHomeFetch;
