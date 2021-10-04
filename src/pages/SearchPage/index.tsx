import React from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import { SearchResults } from "containers";
import { Logo } from "components";

const SearchPage: React.FC = () => {
  return (
    <div className={styles.SearchPage}>
      <Header />
      <SearchResults />
      <footer className={styles.SearchPage__footer}>
        <Logo />
      </footer>
    </div>
  );
};

export default SearchPage;
