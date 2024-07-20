import { Link } from "react-router-dom";
import searchIcon from "../../assets/search.png";
import plusIcon from "../../assets/plus.png";
import useSearchInputNavigation from "../../hooks/useSearchInputNavigation";
import {
  useResponsivePadding,
  useSearchPathActive,
} from "../../hooks/useResponsivePadding";

export default function Navbar(): JSX.Element {
  const {
    showInput,
    setShowInput,
    inputValue,
    setInputValue,
    isSearch,
    handleKeyDown,
  } = useSearchInputNavigation();

  const { shouldShowSearchButton, shouldShowAddButton, paddingClass } =
    useResponsivePadding(showInput);
  const { searchPath, searchPathMobile } = useSearchPathActive();

  return (
    <div
      className={`relative flex flex-col lg:flex-row w-full ${
        searchPath ? "lg:pb-[20px]" : "lg:pb-[43px]"
      } px-[20px] ${
        searchPathMobile ? "pt-[77px]" : "pt-[82px]"
      }  lg:px-[0px] ${isSearch ? "lg:pt-[64px]" : "lg:pt-[46px]"}`}
    >
      <div className="absolute md:top-[40px] md:left-[80px] w-[130px] h-[106px] top-[47px] left-[20px] flex items-center justify-center">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="text-[35px] font-[600] font-caros text-black leading-[1] h-full flex items-center justify-center">
            The Movie Tracker
          </span>
        </Link>
      </div>
      <div
        className={`flex justify-end w-full lg:hidden space-x-5 ${
          !showInput ? "pb-[22px] " : "pb-0"
        } `}
      >
        {shouldShowSearchButton && (
          <button
            onClick={() => setShowInput((prev) => !prev)}
            className={`${showInput ? "hidden" : ""}`}
          >
            <img src={searchIcon} alt="Search" />
          </button>
        )}

        {shouldShowAddButton && (
          <button>
            <img src={plusIcon} alt="Add" />
          </button>
        )}
      </div>

      <div
        className={`flex justify-center w-full ${paddingClass} ${
          !showInput ? "hidden lg:flex" : ""
        }`}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          placeholder="🔍 Search a movie or a series"
          className="lg:py-[17px] lg:px-[auto] bg-secondary md:rounded-[30px] placeholder-[black] lg:w-[630px] lg:h-[57px] md:w-[410px] md:h-[54px] w-[334px] h-[52.6px] rounded-[20px] font-roboto md:text-[20px] text-[18px] font-normal md:leading-[23.44px] leading-[21.09px] text-center focus:outline-none"
        />
      </div>

      {searchPathMobile && !showInput && (
        <div className={`flex justify-center w-full mt-[25px] mb-[18.4px]`}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            placeholder="🔍 Search a movie or a series"
            className=" bg-secondary placeholder-[black] w-[334px] h-[52.6px] rounded-[20px] font-roboto text-[18px] font-normal  leading-[21.09px] text-center focus:outline-none"
          />
        </div>
      )}
    </div>
  );
}
