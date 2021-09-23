import React, { useState } from "react";
import styles from "./styles.module.scss";
import Poster from "../Poster";
import { movies } from "../../movies";

const quantity = 39;

const MoviesList: React.FC = () => {
  const [moviesList, setMoviesList] = useState([...movies]);

  const onDeleteConfirm = (id: string) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id));
  };

  if (!movies || movies.length === 0) {
    return <div className={styles.noData}>Nothing found for this request</div>;
  }
  return (
    <>
      <div className={styles.quantity}>
        <strong>{quantity}</strong> movies found
      </div>
      <div className={styles.posters}>
        {moviesList &&
          moviesList.map((movie) => (
            <Poster
              key={movie.id}
              movie={movie}
              onDeleteConfirm={onDeleteConfirm}
            />
          ))}
      </div>
    </>
  );
};

export default MoviesList;
