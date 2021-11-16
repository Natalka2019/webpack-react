import React from "react";
import styles from "./styles.module.scss";
import { SearchResults, SearchHeader } from "@/containers";
import { Footer } from "@/components";

const MoviesPage: React.FC = () => {
  return (
    <div className={styles.MoviesPage}>
      <SearchHeader />
      <div className={styles.MoviesPage__searchResults}>
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
