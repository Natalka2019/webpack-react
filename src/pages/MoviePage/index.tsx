import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { SearchResults } from "containers";
import { Footer } from "components";
import { useParams } from "react-router-dom";
import { IMovie } from "models";
import MovieDetails from "./components/MovieDetails";
import * as actions from "store/actions";
import { RootState } from "store/reducers";
import { Logo } from "components";
import clsx from "clsx";
import { Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Routes from "../../routes";
import CircularProgress from "@mui/material/CircularProgress";

interface ParamTypes {
  id: string;
}

const MoviePage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    dispatch(actions.movieActions.getMovie(Number(id)));
  }, [id]);

  const movie: IMovie | null = useSelector(
    (state: RootState) => state.movieReducer.movie
  );

  const onSearch = () => {
    history.push(Routes.ROOT);
  };

  const getMovieStatus = useSelector(
    (state: RootState) => state.movieReducer.getMovieStatus
  );

  let movieSection;

  if (getMovieStatus.loading) {
    movieSection = (
      <div className={styles.loaderContainer}>
        <CircularProgress style={{ color: "white" }} />
      </div>
    );
  }

  if (getMovieStatus.error) {
    movieSection = (
      <div className={styles.errorContainer}>
        This movie is unavailable now. Please, choose another one. Sorry for
        inconvenience!
      </div>
    );
  }

  if (movie) {
    movieSection = <MovieDetails movie={movie} />;
  }

  return (
    <div className={styles.MoviePage}>
      <div className={styles.MoviePage__movieDetails}>
        <div
          className={clsx(
            styles.MoviePage__movieDetails__section,
            styles.MoviePage__movieDetails__section_top
          )}
        >
          <Logo />
          <div
            className={styles.MoviePage__movieDetails__searchIcon}
            onClick={onSearch}
          >
            <Search />
          </div>
        </div>
        <div
          className={clsx(
            styles.MoviePage__movieDetails__section,
            styles.MoviePage__movieDetails__section_bottom
          )}
        >
          {movieSection}
        </div>
      </div>
      <div className={styles.MoviePage__searchResults}>
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
