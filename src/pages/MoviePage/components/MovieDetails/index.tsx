import React from "react";
import styles from "./styles.module.scss";
import { IMovie } from "models";
import { Logo } from "components";
import clsx from "clsx";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Routes from "../../../../routes";

interface Props {
  movie: IMovie;
}

const MovieDetails: React.FC<Props> = ({ movie }) => {
  const history = useHistory();
  const { title, releaseDate, movieUrl, rating, overview, runTime, genre } =
    movie;
  const date = new Date(releaseDate);
  const releaseYear = date.getFullYear();

  const onSearch = () => {
    history.push(Routes.ROOT);
  };

  return (
    <div className={styles.MovieDetails}>
      <div
        className={clsx(
          styles.MovieDetails__section,
          styles.MovieDetails__section_top
        )}
      >
        <Logo />
        <div className={styles.MovieDetails__searchIcon} onClick={onSearch}>
          <Search />
        </div>
      </div>
      <div
        className={clsx(
          styles.MovieDetails__section,
          styles.MovieDetails__section_bottom
        )}
      >
        <div className={styles.MovieDetails__imageContainer}>
          <img className={styles.MovieDetails__image} src={movieUrl} />
        </div>
        <div className={styles.MovieDetails__info}>
          <div className={styles.MovieDetails__titleRating}>
            <div className={styles.MovieDetails__title}>{title}</div>
            <div className={styles.MovieDetails__rating}>
              {rating.toFixed(1)}
            </div>
          </div>
          <div className={styles.MovieDetails__genre}>{genre}</div>
          <div className={styles.MovieDetails__dateRuntime}>
            <div className={styles.MovieDetails__date}>{releaseYear}</div>
            <div className={styles.MovieDetails_runtime}>{runTime} min</div>
          </div>
          <div className={styles.MovieDetails__overview}>{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
