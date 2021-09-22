import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import { genres } from "./genres.js";
import FiltersContainer from "../FiltersContainer";
import MoviesList from "../MoviesList";

const SearchResults: React.FC = () => {
  const onGenre = useCallback((id: string) => {
    console.log(id);
  }, []);

  return (
    <main className={styles.SearchResults}>
      <div className={styles.SearchResults__filters}>
        <FiltersContainer genres={genres} onGenre={onGenre} />
      </div>
      <MoviesList />
    </main>
  );
};

export default SearchResults;
