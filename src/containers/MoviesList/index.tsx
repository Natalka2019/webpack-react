import React from "react";
import styles from "./styles.module.scss";
import Poster from "../Poster";
import { IMovie } from "models";

interface Props {
  moviesList: IMovie[];
  onDeleteConfirm: (id: string) => void;
  onSubmit: (movie: IMovie) => void;
}

const MoviesList: React.FC<Props> = ({
  moviesList,
  onDeleteConfirm,
  onSubmit,
}) => {
  if (!moviesList || moviesList.length === 0) {
    return <div className={styles.noData}>Nothing found for this request</div>;
  }
  return (
    <>
      <div className={styles.quantity}>
        <strong>{moviesList.length}</strong> movies found
      </div>
      <div className={styles.posters}>
        {moviesList &&
          moviesList.map((movie: IMovie) => (
            <Poster
              key={movie.id}
              movie={movie}
              onDeleteConfirm={onDeleteConfirm}
              onSubmitForm={onSubmit}
            />
          ))}
      </div>
    </>
  );
};

export default MoviesList;
