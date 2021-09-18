import React, { useCallback, useRef, useEffect } from "react";
import { Logo, Button, InputField } from "components";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
    console.log("input");
  }, []);

  const onAddMovie = useCallback(() => {
    console.log("Add movie here!");
  }, []);

  const onSearch = useCallback((e: any) => {
    if (e.key && e.key !== "Enter") {
      return null;
    }
    console.log(`Search ${searchInputRef.current?.value}!!`);
  }, []);

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
            type="search"
            ref={searchInputRef}
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
