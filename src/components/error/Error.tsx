import { Link } from "react-router-dom";
import { ErrorResponse } from "../../types/types";
import { colors } from "../../constants/colors";

export default function Error({
  message,
  statusCode,
}: ErrorResponse): JSX.Element {
  return (
    <div
      className={`flex flex-col h-screen justify-center items-center ${colors.bgPrimary}`}
    >
      <div className="flex flex-col items-center font-roboto px-4">
        <h1
          className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold ${colors.textDanger}`}
        >
          {statusCode}
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl font-medium ${colors.textBlack}  mb-6 text-center`}
        >
          {message}
        </p>
        <Link
          to={"/"}
          className={`px-4 py-2 font-medium ${colors.textwhite} ${colors.bgBlue} rounded-lg hover:${colors.bgBlueDark} transition-all duration-200 ease-in-out`}
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
