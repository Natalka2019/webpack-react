import React from "react";
import styles from "./styles.module.scss";
import { IMovie } from "models";

interface Props {
  movie: IMovie;
}

const MovieDetails: React.FC<Props> = ({ movie }) => {
  const {
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    runtime,
    genres,
  } = movie;
  const date = new Date(release_date);
  const releaseYear = date.getFullYear();

  return (
    <div className={styles.MovieDetails}>
      <div className={styles.MovieDetails__imageContainer}>
        <img
          className={styles.MovieDetails__imageContainer__image}
          src={poster_path}
        />
      </div>
      <div className={styles.MovieDetails__section__info}>
        <div className={styles.MovieDetails__titleVote}>
          <div className={styles.MovieDetails__title}>{title}</div>
          <div className={styles.MovieDetails__vote}>
            {vote_average?.toFixed(1) || "0.0"}
          </div>
        </div>
        <div className={styles.MovieDetails__genre}>{genres.join(", ")}</div>
        <div className={styles.MovieDetails__dateRuntime}>
          <div className={styles.MovieDetails__date}>{releaseYear}</div>
          <div className={styles.MovieDetails_runtime}>
            {runtime ? `${runtime} min` : ""}
          </div>
        </div>
        <div className={styles.MovieDetails__overview}>{overview}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
