import { useEffect } from "react";
import { fetchMovieDetails } from "../../store/slices/movieDetailsSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { MovieDetailsState } from "../../types/types";

const useMovieFetch = (id: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined && id !== "") {
        await dispatch(fetchMovieDetails(id));
      }
    };

    fetchData();
  }, [dispatch, id]);

  const stateData = useAppSelector(
    (state: RootState): MovieDetailsState => state.movieDetails
  );

  return {
    isLoading: stateData.isLoading,
    isError: stateData.isError,
    details: stateData.details,
    trailer: stateData.trailer,
    similarMovies: stateData.similarMovies,
  };
};

export default useMovieFetch;
