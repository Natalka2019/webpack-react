import React, { useCallback, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Logo } from "components";
import { movies } from "./movies";
import { IMovie } from "models";
import { sortFunction } from "utilities";

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

  const onSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const updatedMoviesList: IMovie[] = [...moviesList];

    if (sort === "Title") {
      updatedMoviesList.sort((a, b) =>
        sortFunction(a.title.toLowerCase(), b.title.toLowerCase())
      );
    }

    if (sort === "Genre") {
      updatedMoviesList.sort((a, b) =>
        sortFunction(a.genre.toLowerCase(), b.genre.toLowerCase())
      );
    }

    if (sort === "Release date") {
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
