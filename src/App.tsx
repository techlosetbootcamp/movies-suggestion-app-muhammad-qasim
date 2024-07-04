import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movie from "./pages/movie/Movie";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";

function App() {
  const location = useLocation();
  const showNavbar =
    location.pathname === "/" ||
    location.pathname.startsWith("/search") ||
    location.pathname.startsWith("/movie");
  return (
    <>
      <div className={`App`}>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route
            path="*"
            element={<Error message={"Page Not Found"} statusCode={404} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
