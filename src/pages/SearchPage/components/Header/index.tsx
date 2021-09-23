import React, { useCallback, useRef, useEffect } from "react";
import { Logo, Button, InputField } from "components";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
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
    <header className={styles.Header}>
      <div
        className={`${styles.Header__headerSection} ${styles.Header__headerSection_top}`}
      >
        <Logo />
        <Button
          name="+ ADD MOVIE"
          className={styles.Header__addButton}
          onClick={onAddMovie}
        />
      </div>
      <div
        className={`${styles.Header__headerSection} ${styles.Header__headerSection_bottom}`}
      >
        <div className={styles.Header__title}>Find your movie</div>
        <div className={styles.Header__searchContainer}>
          <InputField
            className={styles.Header__searchInput}
            onEnter={onSearch}
            type="search"
            ref={searchInputRef}
            placeholder="What do you want to watch?"
          />
          <Button
            name="SEARCH"
            className={styles.Header__searchButton}
            onClick={onSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
