import { Link } from "react-router-dom";
import { CardProps } from "../../types/types";
import { colors } from "../../constants/colors";

export default function Card({
  reviewStar = false,
  item,
}: CardProps): JSX.Element {
  return (
    <>
      <div className="inline-block bg-transparent relative">
        <div className="w-[158px] h-[234px] md:w-[177px] md:h-[263px] mr-[21px] md:mr-[22px] overflow-hidden transition-shadow duration-300 ease-in-out relative">
          {item?.poster_path && (
            <Link to={`/movie/${item?.id}`}>
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt={item?.title || "Movie"}
                  className="rounded-[20px] object-cover w-[158px] h-[234px] md:w-[177px] md:h-[263px]"
                />
                <div
                  className={`absolute inset-0 ${colors.bgblack} bg-opacity-15 rounded-[20px]`}
                ></div>
              </div>
              {reviewStar && (
                <div
                  className={`absolute top-[17px] left-[12px] ${colors.textwhite} font-caros-bold text-[15px] font-semibold leading-[9.24px] text-left`}
                >
                  ⭐ {item?.vote_average?.toFixed(1)}
                </div>
              )}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
