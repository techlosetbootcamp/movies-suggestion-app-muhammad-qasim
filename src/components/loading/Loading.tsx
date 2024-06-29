import { colors } from "../../constants/colors";

export default function Loading(): JSX.Element {
  return (
    <div
      className={`flex space-x-2 justify-center items-center ${colors.bgPrimary} h-screen `}
    >
      <span className="sr-only">Loading...</span>
      <div
        className={`h-8 w-8 ${colors.bgblack}  rounded-full animate-bounce [animation-delay:-0.3s]`}
      ></div>
      <div
        className={`h-8 w-8 ${colors.bgblack}  rounded-full animate-bounce [animation-delay:-0.15s]`}
      ></div>
      <div
        className={`h-8 w-8 ${colors.bgblack}  rounded-full animate-bounce`}
      ></div>
    </div>
  );
}
