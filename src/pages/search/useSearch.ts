import { useEffect } from "react";
import { fetchMovies } from "../../store/slices/searchSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { SearchState } from "../../types/types";

const useSearchFetch = (searchQuery: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery !== undefined) {
        await dispatch(fetchMovies(searchQuery));
      }
    };

    fetchData();
  }, [dispatch, searchQuery]);

  const stateData = useAppSelector(
    (state: RootState): SearchState => state.search
  );

  return {
    isLoading: stateData.isLoading,
    isError: stateData.isError,
    movies: stateData.movies,
  };
};

export default useSearchFetch;
