import { Link, useLocation } from "react-router-dom";
import { Movies } from "../../types/types";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import useSearchFetch from "./useSearch";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search(): JSX.Element {
  const query = useQuery();
  const searchQuery: string | undefined = query.get("query") ?? undefined;

  const { isLoading, isError, movies } = useSearchFetch(searchQuery);

  if (isLoading === true) {
    return <Loading />;
  }

  if (isError !== null) {
    return <Error message={isError.message} statusCode={isError.statusCode} />;
  }

  if (movies === null || movies.length === 0 || movies[0].poster_path == null) {
    return <Error message="No results found" statusCode={404} />;
  }

  return (
    <>
      <div className="lg:mx-[80px] lg:mb-[46px] lg:mt-[46px] my-[20px] mx-[20px] relative">
        <div className="lg:mb-[14px]">
          <h1 className="font-roboto text-[15px] font-[500] leading-[10.95px]  text-black hidden lg:block">
            Showing search results for:{" "}
            <span className="font-roboto text-[20px] font-[500] leading-[14.6px]  text-darkGrey">
              {searchQuery}
            </span>
          </h1>
        </div>
        <div className="lg:pt-[20px] relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-[31px] sm:gap-y-[20px] gap-x-[20px] sm:gap-x-[20px] relative">
            {movies?.map((item: Movies) =>
              item?.poster_path !== null ? (
                <Link key={item?.id} to={`/movie/${item?.id}`}>
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                      alt={item?.title}
                      className="rounded-[20px] object-cover w-full h-full"
                    />
                    <div className="absolute top-[17px] left-[12px]  text-white font-caros-bold text-[15px] font-semibold leading-[9.24px] text-left">
                      ⭐ {item?.vote_average?.toFixed(1)}
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
