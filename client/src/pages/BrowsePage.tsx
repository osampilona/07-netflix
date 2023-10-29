import Billboard from "../components/Billboard";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function BrowsePage() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-r">
        <MovieList />
      </div>
    </div>
  );
}

export default BrowsePage;
