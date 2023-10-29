import Billboard from "../components/Billboard";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import useMoviesList from "../hooks/useMoviesList";

function BrowsePage() {
  const { data, loading, error } = useMoviesList();
  console.log({ data, loading, error });

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
