import React from "react";
import styles from "./styles.module.scss";
import { Poster } from "components";
import { IMovie } from "models";

const quantity = 39;

interface Props {
  movies: IMovie[];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div className={styles.noData}>Nothing found for this request</div>;
  }
  return (
    <>
      <div className={styles.quantity}>
        <strong>{quantity}</strong> movies found
      </div>
      <div className={styles.posters}>
        {movies &&
          movies.map((movie) => <Poster key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MoviesList;
