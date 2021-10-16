import React from "react";
import styles from "./styles.module.scss";
import FiltersContainer from "../FiltersContainer";
import MoviesList from "../MoviesList";

const SearchResults: React.FC = () => {
  return (
    <main className={styles.SearchResults}>
      <div className={styles.SearchResults__filters}>
        <FiltersContainer />
      </div>
      <MoviesList />
    </main>
  );
};

export default SearchResults;
