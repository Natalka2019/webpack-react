import React from "react";
import styles from "./styles.module.scss";
import Header from "./components/Header";
import { Logo } from "components";

const SearchPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <Logo />
      </footer>
    </div>
  );
};

export default SearchPage;
