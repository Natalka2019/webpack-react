import React, { useCallback, useRef, useEffect, useState } from "react";
import { Logo, Button, InputField, Modal, MovieModal } from "components";
import styles from "./styles.module.scss";
import { IMovie } from "models";

const Header: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const onCloseMovieModal = () => {
    setIsMovieModalOpen(false);
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const onAddMovie = useCallback(() => {
    setIsMovieModalOpen(true);
  }, []);

  const onSearch = useCallback((e: any) => {
    if (e.key && e.key !== "Enter") {
      return null;
    }
    console.log(`Search ${searchInputRef.current?.value}!!`);
  }, []);

  const onSubmit = (movie: IMovie) => {
    console.log("Header", movie);
  };

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
            inputClassName={styles.Header__searchInput}
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
      <Modal onCloseModal={onCloseMovieModal} isModalOpen={isMovieModalOpen}>
        <MovieModal
          onSubmit={onSubmit}
          buttonName="Submit"
          modalTitle="Add movie"
        />
      </Modal>
    </header>
  );
};

export default Header;
