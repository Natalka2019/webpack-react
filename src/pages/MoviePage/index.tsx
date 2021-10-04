import React from "react";
import styles from "./styles.module.scss";
import { SearchResults } from "containers";
import { Footer } from "components";
import { useParams } from "react-router-dom";
import { movies } from "../../mockData/movies";
import { IMovie } from "models";
import MovieDetails from "./components/MovieDetails";

interface ParamTypes {
  id: string;
}

const MoviePage: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const movie = movies.find((movie: IMovie) => movie.id === id);
  console.log(movie);
  return (
    <div className={styles.MoviePage}>
      <div className={styles.MoviePage__movieDetails}>
        {movie && <MovieDetails movie={movie} />}
      </div>
      <div className={styles.MoviePage__searchResults}>
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
