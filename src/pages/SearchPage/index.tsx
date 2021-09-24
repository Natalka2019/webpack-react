import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Logo } from "components";
import { movies } from "./movies";
import { IMovie } from "models";

const SearchPage: React.FC = () => {
  const [moviesList, setMoviesList] = useState<IMovie[]>([...movies]);

  const onDeleteConfirm = useCallback((id: string) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id));
  }, []);

  const onSubmit = useCallback(
    (movie: IMovie) => {
      let updatedMoviesList: IMovie[] = [];
      if (movie.id !== "") {
        updatedMoviesList = moviesList.map((el) =>
          el.id === movie.id ? { ...el, ...movie } : el
        );
      } else {
        let id = moviesList.length;
        movie.id = String(++id);
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

  return (
    <div className={styles.SearchPage}>
      <Header onSubmit={onSubmit} />
      <SearchResults
        moviesList={moviesList}
        onDeleteConfirm={onDeleteConfirm}
        onSubmit={onSubmit}
        onGenre={onGenre}
      />
      <footer className={styles.SearchPage__footer}>
        <Logo />
      </footer>
    </div>
  );
};

export default SearchPage;
