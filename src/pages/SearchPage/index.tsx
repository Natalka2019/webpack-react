import React from "react";
import styles from "./styles.module.scss";
import { SearchResults, SearchHeader } from "@/containers";
import { Footer } from "@/components";

const SearchPage: React.FC = () => {
  return (
    <div className={styles.SearchPage}>
      <SearchHeader />
      <div className={styles.SearchPage__searchResults}>
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
