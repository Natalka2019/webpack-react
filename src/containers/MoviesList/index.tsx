import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Poster from "../Poster";
import { IMovie } from "models";
import * as actions from "store/actions";
import { RootState } from "store/reducers";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  onDeleteConfirm: (id: number) => void;
  onSubmit: (movie: IMovie) => void;
}

const MoviesList: React.FC<Props> = ({ onDeleteConfirm, onSubmit }) => {
  const dispatch = useDispatch();
  const moviesRequestParams = useSelector(
    (state: RootState) => state.movieReducer.moviesRequestParams
  );

  useEffect(() => {
    if (moviesRequestParams.offset !== 0) {
      return;
    }
    dispatch(actions.movieActions.getMovies());
  }, []);

  const moviesList = useSelector(
    (state: RootState) => state.movieReducer.movies
  );

  const moviesTotal = useSelector(
    (state: RootState) => state.movieReducer.moviesTotal
  );

  const fetchNextPart = () => {
    dispatch(
      actions.movieActions.updateMoviesRequestParams({
        offset: moviesRequestParams.offset + moviesRequestParams.limit,
      })
    );
    dispatch(actions.movieActions.getMovies());
  };

  console.log(moviesList);

  if (moviesList.length === 0) {
    return <div className={styles.noData}>Nothing found for this request</div>;
  }
  return (
    <div className={styles.MoviesList}>
      <div className={styles.quantity}>
        <strong>{moviesList.length}</strong> movies found
      </div>

      <InfiniteScroll
        dataLength={moviesList.length}
        next={fetchNextPart}
        hasMore={moviesRequestParams.offset < moviesTotal}
        loader={<h4 className={styles.loadingMessage}>Loading...</h4>}
        endMessage={<h4 className={styles.endMessage}>The End.</h4>}
      >
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
      </InfiniteScroll>
    </div>
  );
};

export default MoviesList;
