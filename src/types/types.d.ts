export type Genres = {
  id: number;
  name: string;
};

export type ErrorResponse = {
  message: string;
  statusCode: number;
};

export type MovieDetailsData = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: Genres[];
  vote_average: number;
  vote_count: number;
};

export type SimilarMovies = {
  id: number;
  title: string;
  poster_path: string;
};

export type Trailer = {
  id: string;
  key: string;
  type: string;
  site: string;
};

export type MovieDetailsState = {
  isLoading: boolean;
  isError: ErrorResponse | null;
  details: MovieDetailsData | null;
  trailer: Trailer[] | null;
  similarMovies: SimilarMovies[] | null;
};

export type PopularMovies = {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
};

export type TrendingMovies = {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
};

export type ReleasesMovies = {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
};
export type MovieCardState = {
  isLoading: boolean;
  isError: ErrorResponse | null;
  popularMovies: PopularMovies[] | null;
  trendingMovies: TrendingMovies[] | null;
  releasesMovies: ReleasesMovies[] | null;
};

export type Movies = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export type SearchState = {
  isLoading: boolean;
  isError: ErrorResponse | null;
  movies: Movies[] | null;
};

export type FetchMovieCardPayload = {
  popularMoviesData: PopularMovies[] | null;
  trendingMoviesData: TrendingMovies[] | null;
  releasesMoviesData: ReleasesMovies[] | null;
};

export type FetchMovieDetailsPayload = {
  movieDetailsData: MovieDetailsData | null;
  trailerData: Trailer[] | null;
  similarMovies: SimilarMovies[] | null;
};

export type FetchSearchPayload = {
  movieDetailsData: Movies[] | null;
};

export type PopularMovieProps = {
  popularMovies: PopularMovies[] | null;
};

export type TrendingMoviesProps = {
  trendingMovies: TrendingMovies[] | null;
};

export type PopularReleasesProps = {
  releasesMovies: ReleasesMovies[] | null;
};

export type CardProps = {
  reviewStar?: boolean;
  item: PopularMovies | TrendingMovies | ReleasesMovies;
};

export type AsyncThunkConfig = {
  rejectValue: ErrorResponse;
};

export type AsyncThunkReturnType =
  | FetchMovieDetailsPayload
  | FetchMovieCardPayload
  | FetchSearchPayload;

export type AsyncThunkArgumentType = string;
