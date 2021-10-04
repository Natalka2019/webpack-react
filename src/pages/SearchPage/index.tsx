import React from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import { SearchResults } from "containers";
import { Footer } from "components";

const SearchPage: React.FC = () => {
  return (
    <div className={styles.SearchPage}>
      <Header />
      <div className={styles.SearchPage__searchResults}>
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
