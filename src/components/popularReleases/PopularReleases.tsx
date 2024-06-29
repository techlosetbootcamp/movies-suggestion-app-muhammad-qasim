import { colors } from "../../constants/colors";
import { ReleasesMovies, PopularReleasesProps } from "../../types/types";
import Card from "../card/Card";

export default function PopularReleases({
  releasesMovies,
}: PopularReleasesProps) {
  return (
    <>
      <div className="flex flex-col">
        <h3
          className={`font-roboto text-[20px] ${colors.textBlack}  font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]`}
        >
          Popular Releases
        </h3>
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {releasesMovies?.map((item: ReleasesMovies) => (
              <Card key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
