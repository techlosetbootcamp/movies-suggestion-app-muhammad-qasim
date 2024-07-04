import PopularMovie from "../../components/popularMovies/PopularMovie";
import PopularReleases from "../../components/popularReleases/PopularReleases";
import Trending from "../../components/trending/Trending";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import useHomeFetch from "./useHome";

export default function Home(): JSX.Element {
  const { popularMovies, isLoading, isError, trendingMovies, releasesMovies } =
    useHomeFetch();
  if (isLoading === true) {
    return <Loading />;
  }

  if (isError !== null) {
    return <Error message={isError.message} statusCode={isError.statusCode} />;
  }

  return (
    <div className="md:mx-[80px] mx-5 md:mb-[85px] mb-[38px] md:mt-[41px] mt-[37px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px]">
        <div className="md:col-span-1 lg:col-span-1 row-start-1">
          <PopularMovie popularMovies={popularMovies} />
        </div>
        <div className="md:col-span-2 md:ml-[96px]  md:mt-0 mt-[48px] row-start-3 md:row-start-1">
          <Trending trendingMovies={trendingMovies} />
        </div>
        <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 md:row-start-3 lg:row-start-2">
          <PopularReleases releasesMovies={releasesMovies} />
        </div>
      </div>
    </div>
  );
}
