import { useEffect } from "react";
import { fetchMovies } from "../../store/slices/searchSlice";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { SearchState } from "../../types/types";

const useSearchFetch = (searchQuery: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchQuery !== undefined) {
      dispatch(fetchMovies(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const stateData = useAppSelector<SearchState>(
    (state: RootState) => state.search
  );

  return stateData;
};

export default useSearchFetch;
