import React, {
  useCallback,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logo, Button, InputField, Modal, MovieModal } from "components";
import styles from "./styles.module.scss";
import clsx from "clsx";
import * as actions from "store/actions";
import { RootState } from "store/reducers";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  const movieModalStatus = useSelector(
    (state: RootState) => state.movieReducer.movieModalStatus
  );

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onCloseMovieModal = () => {
    dispatch(actions.movieActions.movieModalStatusToggle(false));
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const onAddMovie = useCallback(() => {
    dispatch(actions.movieActions.movieModalStatusToggle(true));
  }, []);

  const onSearch = useCallback(
    (e: any) => {
      if (e.key && e.key !== "Enter") {
        return null;
      }
      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          search: searchValue,
          offset: 0,
        })
      );
      dispatch(actions.movieActions.getMovies());
    },
    [searchValue]
  );

  useEffect(() => {
    return function clearSearchRequest() {
      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          search: "",
        })
      );
    };
  }, []);

  return (
    <header className={styles.Header}>
      <div
        className={clsx(
          styles.Header__headerSection,
          styles.Header__headerSection_top
        )}
      >
        <Logo />
        <Button
          name="+ ADD MOVIE"
          className={styles.Header__addButton}
          onClick={onAddMovie}
        />
      </div>
      <div
        className={clsx(
          styles.Header__headerSection,
          styles.Header__headerSection_bottom
        )}
      >
        <div className={styles.Header__title}>Find your movie</div>
        <div className={styles.Header__searchContainer}>
          <InputField
            inputClassName={styles.Header__searchInput}
            onEnter={onSearch}
            type="search"
            ref={searchInputRef}
            placeholder="What do you want to watch?"
            value={searchValue}
            onChange={onSearchChange}
          />
          <Button
            name="SEARCH"
            className={styles.Header__searchButton}
            onClick={onSearch}
          />
        </div>
      </div>
      <Modal onCloseModal={onCloseMovieModal} isModalOpen={movieModalStatus}>
        <MovieModal buttonName="Submit" modalTitle="Add movie" />
      </Modal>
    </header>
  );
};

export default Header;
