import React, { useCallback, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Logo } from "components";
import { movies } from "./movies";
import { IMovie } from "models";
import { sortFunction } from "utilities";
import { sortOptions } from "common";
import { v4 as uuidv4 } from "uuid";

const SearchPage: React.FC = () => {
  const [moviesList, setMoviesList] = useState<IMovie[]>([
    ...movies.sort((a, b) => sortFunction(a.releaseDate, b.releaseDate)),
  ]);

  const onDeleteConfirm = useCallback((id: string) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id));
  }, []);

  const onSubmit = useCallback(
    (movie: IMovie) => {
      let updatedMoviesList: IMovie[] = [];
      if (movie.id) {
        updatedMoviesList = moviesList.map((el) =>
          el.id === movie.id ? { ...el, ...movie } : el
        );
      } else {
        movie.id = uuidv4();
        updatedMoviesList = [...moviesList, movie];
      }
      setMoviesList(updatedMoviesList);
    },
    [moviesList]
  );

  const onGenre = useCallback((title: string) => {
    if (title !== "All") {
      setMoviesList(moviesList.filter((movie) => movie.genre === title));
    } else {
      setMoviesList(moviesList.filter((movie) => movie));
    }
  }, []);

  const onSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const updatedMoviesList: IMovie[] = [...moviesList];

    if (sort === sortOptions.title) {
      updatedMoviesList.sort((a, b) =>
        sortFunction(a.title.toLowerCase(), b.title.toLowerCase())
      );
    }

    if (sort === sortOptions.genre) {
      updatedMoviesList.sort((a, b) =>
        sortFunction(a.genre.toLowerCase(), b.genre.toLowerCase())
      );
    }

    if (sort === sortOptions.releaseDate) {
      updatedMoviesList.sort((a, b) =>
        sortFunction(a.releaseDate, b.releaseDate)
      );
    }

    setMoviesList(updatedMoviesList);
  }, []);

  return (
    <div className={styles.SearchPage}>
      <Header onSubmit={onSubmit} />
      <SearchResults
        moviesList={moviesList}
        onDeleteConfirm={onDeleteConfirm}
        onSubmit={onSubmit}
        onGenre={onGenre}
        onSortChange={onSortChange}
      />
      <footer className={styles.SearchPage__footer}>
        <Logo />
      </footer>
    </div>
  );
};

export default SearchPage;
