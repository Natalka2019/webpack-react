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
          <img className={styles.MovieDetails__image} src={poster_path} />
        </div>
        <div className={styles.MovieDetails__info}>
          <div className={styles.MovieDetails__titleVote}>
            <div className={styles.MovieDetails__title}>{title}</div>
            <div className={styles.MovieDetails__vote}>
              {vote_average?.toFixed(1)}
            </div>
          </div>
          <div className={styles.MovieDetails__genre}>{genres.join(" ,")}</div>
          <div className={styles.MovieDetails__dateRuntime}>
            <div className={styles.MovieDetails__date}>{releaseYear}</div>
            <div className={styles.MovieDetails_runtime}>{runtime} min</div>
          </div>
          <div className={styles.MovieDetails__overview}>{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
