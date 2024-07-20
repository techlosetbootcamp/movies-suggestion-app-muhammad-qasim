import { PopularMovies, PopularMovieProps } from "../../types/types";
import Card from "../card/Card";

export default function PopularMovie({
  popularMovies,
}: PopularMovieProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="font-roboto text-[20px]  w-[140px] text-black font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]">
        Popular Movies
      </h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap  ">
          {popularMovies?.map((item: PopularMovies) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
