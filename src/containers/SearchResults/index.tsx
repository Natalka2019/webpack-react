import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import FiltersContainer from "../FiltersContainer";
import MoviesList from "../MoviesList";

const SearchResults: React.FC = () => {
  const onDeleteConfirm = useCallback((id: number) => {
    // setMoviesList(moviesList.filter((movie) => movie.id !== id));

    console.log(id);
  }, []);

  return (
    <main className={styles.SearchResults}>
      <div className={styles.SearchResults__filters}>
        <FiltersContainer />
      </div>
      <MoviesList onDeleteConfirm={onDeleteConfirm} />
    </main>
  );
};

export default SearchResults;
