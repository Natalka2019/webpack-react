import React, { ChangeEvent } from "react";
import { Logo, Button, InputField } from "components";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const onAddMovie = () => {
    console.log("Add movie here!");
  };
  const onType = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.trim());
  };
  const onSearch = (e: any) => {
    if (e.key && e.key !== "Enter") {
      return null;
    }
    console.log("Search!!");
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerSection} ${styles.top}`}>
        <Logo />
        <Button
          name="+ ADD MOVIE"
          className={styles.addButton}
          onClick={onAddMovie}
        />
      </div>
      <div className={`${styles.headerSection} ${styles.bottom}`}>
        <div className={styles.title}>Find your movie</div>
        <div className={styles.searchContainer}>
          <InputField
            className={styles.searchInput}
            onEnter={onSearch}
            onChange={onType}
            type="search"
            placeholder="What do you want to watch?"
          />
          <Button
            name="SEARCH"
            className={styles.searchButton}
            onClick={onSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
