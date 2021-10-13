import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Poster from "../Poster";
import { IMovie } from "models";
import * as actions from "store/actions";
import { RootState } from "store/reducers";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const MOVIES_PER_PAGE = 12;

interface Props {
  onDeleteConfirm: (id: number) => void;
  onSubmit: (movie: IMovie) => void;
}

const MoviesList: React.FC<Props> = ({ onDeleteConfirm, onSubmit }) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(
      actions.movieActions.getMovies({ offset, limit: MOVIES_PER_PAGE })
    );
  }, [offset]);

  const moviesList = useSelector(
    (state: RootState) => state.movieReducer.movies
  );

  const moviesTotal = useSelector(
    (state: RootState) => state.movieReducer.moviesTotal
  );

  const fetchNextPart = () => {
    setOffset((prev) => prev + MOVIES_PER_PAGE);
  };

  console.log(moviesList);
  console.log(moviesTotal);
  if (moviesList.length === 0) {
    return <div className={styles.noData}>Nothing found for this request</div>;
  }
  return (
    <>
      <div className={styles.quantity}>
        <strong>{moviesList.length}</strong> movies found
      </div>

      <InfiniteScroll
        className={styles.posters}
        dataLength={moviesList.length}
        next={fetchNextPart}
        hasMore={moviesList.length < moviesTotal}
        loader={<h4 className={styles.loadingMessage}>Loading...</h4>}
      >
        {moviesList &&
          moviesList.map((movie: IMovie) => (
            <Poster
              key={movie.id}
              movie={movie}
              onDeleteConfirm={onDeleteConfirm}
              onSubmitForm={onSubmit}
            />
          ))}
      </InfiniteScroll>
    </>
  );
};

export default MoviesList;
