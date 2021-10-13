import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { genres } from "../../mockData/genres";
import FiltersContainer from "../FiltersContainer";
import MoviesList from "../MoviesList";
import { IMovie } from "models";
// import { movies } from "../../mockData/movies";
// import { sortFunction } from "utilities";
// import { sortOptions } from "common";
// import { v4 as uuidv4 } from "uuid";
import * as actions from "store/actions";
import { RootState } from "store/reducers";

// const MOVIES_PER_PAGE = 12;

const SearchResults: React.FC = () => {
  // const dispatch = useDispatch();
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   dispatch(
  //     actions.movieActions.getMovies({ offset, limit: MOVIES_PER_PAGE })
  //   );
  // }, []);

  // const moviesList = useSelector(
  //   (state: RootState) => state.movieReducer.movies
  // );

  // const moviesTotal = useSelector(
  //   (state: RootState) => state.movieReducer.moviesTotal
  // );

  // console.log(moviesList);
  // console.log(moviesTotal);

  // const [moviesList, setMoviesList] = useState<IMovie[]>([
  //   ...movies.sort((a, b) => sortFunction(a.releaseDate, b.releaseDate)),
  // ]);

  const onDeleteConfirm = useCallback((id: number) => {
    // setMoviesList(moviesList.filter((movie) => movie.id !== id));

    console.log(id);
  }, []);

  const onSubmit = useCallback(
    (movie: IMovie) => {
      console.log(movie);
      // let updatedMoviesList: IMovie[] = [];
      // if (movie.id) {
      //   updatedMoviesList = moviesList.map((el) =>
      //     el.id === movie.id ? { ...el, ...movie } : el
      //   );
      // } else {
      //   movie.id = uuidv4();
      //   updatedMoviesList = [...moviesList, movie];
      // }
      // setMoviesList(updatedMoviesList);
    },
    []
    // [moviesList]
  );

  const onGenre = useCallback((title: string) => {
    console.log(title);
    // if (title !== "All") {
    //   setMoviesList(moviesList.filter((movie) => movie.genre === title));
    // } else {
    //   setMoviesList(moviesList.filter((movie) => movie));
    // }
  }, []);

  const onSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    console.log(sort);
    // const updatedMoviesList: IMovie[] = [...moviesList];

    // if (sort === sortOptions.title) {
    //   updatedMoviesList.sort((a, b) =>
    //     sortFunction(a.title.toLowerCase(), b.title.toLowerCase())
    //   );
    // }

    // if (sort === sortOptions.genre) {
    //   updatedMoviesList.sort((a, b) =>
    //     sortFunction(a.genre.toLowerCase(), b.genre.toLowerCase())
    //   );
    // }

    // if (sort === sortOptions.releaseDate) {
    //   updatedMoviesList.sort((a, b) =>
    //     sortFunction(a.release_date, b.release_date)
    //   );
    // }

    // setMoviesList(updatedMoviesList);
  }, []);
  return (
    <main className={styles.SearchResults}>
      <div className={styles.SearchResults__filters}>
        <FiltersContainer
          genres={genres}
          onGenre={onGenre}
          onSortChange={onSortChange}
        />
      </div>
      <MoviesList
        // moviesList={moviesList}
        onDeleteConfirm={onDeleteConfirm}
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default SearchResults;
