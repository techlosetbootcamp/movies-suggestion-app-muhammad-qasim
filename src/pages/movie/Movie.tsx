import { Link, useParams } from "react-router-dom";
import { Genres, SimilarMovies } from "../../types/types";
import bookmarkIcon from "../../assets/bookmark.png";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import useMovieFetch from "./useMovie";
import useReviewCountFormatter from "../../hooks/useReviewCountFormatter";

export default function Movie(): JSX.Element {
  const { id } = useParams();
  const { details, trailer, similarMovies, isLoading, isError } =
    useMovieFetch(id);
  const formattedCount = useReviewCountFormatter(details?.vote_count);
  const links = [1, 2, 3, 4];

  if (isLoading === true) {
    return <Loading />;
  }

  if (isError !== null) {
    return <Error message={isError.message} statusCode={isError.statusCode} />;
  }

  return (
    <div className="md:mx-[80px] md:mb-[74px] mx-[21px] mb-[43px] mt-[55px] md:mt-[43px]">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="font-roboto font-[700] md:text-[40px] text-[30px] md:leading-[46.88px] leading-[35.16px] truncate">
            {details?.title && details?.title?.length > 20
              ? `${details.title.substring(0, 20)}...`
              : details?.title}
          </h1>
        </div>
        <div className="hidden lg:flex  bg-secondary  rounded-[30px]">
          <Link
            to={""}
            className="flex items-center font-roboto font-[500] text-[15px] leading-[17.58px] py-[11px] px-[30px]"
          >
            <img
              src={bookmarkIcon}
              alt="bookmark"
              className="w-[18.2px] h-[23.39px] mr-[10px]"
            />
            Add to watchlist
          </Link>
        </div>
      </div>
      <div className="relative  flex items-center flex-col lg:flex-row  md:pt-[27px] pt-[24px] lg:pb-[51px] pb-[40px] justify-between  w-full">
        <div className="absolute  z-50 order-2 lg:order-1 lg:relative md:top-28 md:left-8 top-[88px] left-[20px]  lg:left-0 lg:top-0 ">
          <img
            src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
            alt={details?.title}
            className="lg:h-[291px] lg:w-[196px] md:w-[140px] md:h-[187px] w-[98px] h-[146px] order-2 rounded-[20px] object-cover"
          />
        </div>
        <div className=" relative order-3 lg:order-2 flex-grow   lg:pl-5 pl-0  mt-[54px] lg:mt-0  w-full lg:w-auto shrink-div">
          <div className="flex space-x-5">
            {details?.genres?.slice(0, 2).map((genre: Genres) => (
              <Link
                key={genre?.id}
                to={""}
                className="font-roboto gerner-link font-[500] text-[18px] leading-[21.09px] py-[6px] px-[18px] rounded-[20px] border border-black"
              >
                {genre?.name}
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-[413px] lg:h-[107px] lg:mt-[19px] lg:mb-12 mt-[27px] mb-[44px] shrink-div overflow-hidden">
            <p className="truncate-multiline font-roboto font-[500] text-[18px] leading-[21.09px]">
              {details?.overview}
            </p>
          </div>
          <div className="flex items-center   space-x-[15px]">
            <div className="flex flex-col items-center ">
              <p className="font-roboto font-[400] text-[18px] leading-[21.09px] ">
                IMDB Rating
              </p>
              <p className="leading-[17.58px] font-roboto text-[15px] font-[400] w-[59px]">
                ⭐{details?.vote_average?.toFixed(1)}
                <span className="text-grey font-roboto font-[400] leading-[14.06px] text-[12px]">
                  /10
                </span>
              </p>
            </div>
            <div className={`leading-[17.58px] text-[15px] text-grey`}>
              <p>{formattedCount || 0} Reviews</p>
            </div>
          </div>
        </div>
        <div className="relative z-40 order-1 lg:order-3">
          <iframe
            title="YouTube Trailer"
            className="tailer-card lg:h-[291px] lg:w-[521px] md:w-[80vw] md:h-[250px] w-[90vw] order-1 h-[187px] rounded-[20px]"
            src={`https://www.youtube.com/embed/${
              trailer && trailer?.length > 0 ? trailer[0]?.key : "defaultKey"
            }?autoplay=0&modestbranding=0&controls=1&showinfo=0&rel=0`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-[30px] font-roboto font-[700]">
        <h2 className="text-[30px] leading-[35.16px] mb-4 md:mb-0">Seasons</h2>
        <div className="flex flex-wrap md:flex-nowrap space-x-[7.73px]">
          {links.map((number) => (
            <Link
              key={number}
              to=""
              className="rounded-[10px] py-[10px] px-[15.30px] bg-secondary text-[20px] leading-[23.44px] mb-2 md:mb-0"
            >
              {number}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-start mt-[34.73px]">
        {similarMovies?.slice(0, 4).map((movie: SimilarMovies, index) => (
          <div
            key={movie?.id}
            className={`flex flex-col w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[202px] rounded-[20px]  bg-white mb-4 md:mb-0 ${
              index % 2 !== 0 && index % 4 !== 0 ? "md:ml-[20px]" : ""
            } ${index % 4 !== 0 ? "lg:ml-[20px]" : ""}`}
          >
            <Link to={`/movie/${movie?.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
                className="h-[142px] w-full rounded-t-[20px]"
              />
              <div className="font-roboto font-bold text-base leading-[23.44px] flex items-center px-[17px] pt-[19px]">
                <h3 className="line-clamp-2">{movie?.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
