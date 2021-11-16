import React, { useCallback, useRef, useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logo, Button, InputField, Modal, MovieModal } from "@/components";
import styles from "./styles.module.scss";
import clsx from "clsx";
import * as actions from "@/store/actions";
import { RootState } from "@/store/reducers";
import { useHistory } from "react-router-dom";
import Routes from "../../routes";

const SearchHeader: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = React.useState("");
  const searchParams = new URLSearchParams();

  const movieModalStatus = useSelector((state: RootState) => state.movieReducer.movieModalStatus);

  useEffect(() => {
    const searchString = history.location.search.split("=");
    const searchParam = searchString[searchString.length - 1];

    if (searchParam) {
      setSearchValue(searchParam);

      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          search: searchParam,
          offset: 0,
        })
      );
      dispatch(actions.movieActions.getMovies());
      searchParams.append("search", searchParam);
      history.push({
        search: searchParams.toString(),
      });
    } else {
      dispatch(actions.movieActions.clearMoviesList());
    }
  }, [history.location.search]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          search: "",
          offset: 0,
        })
      );
      dispatch(actions.movieActions.clearMoviesList());
      searchParams.delete("search");
      history.push({
        pathname: Routes.ROOT,
        search: searchParams.toString(),
      });
    }
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

      if (searchValue !== "") {
        searchParams.append("search", searchValue);
      } else {
        searchParams.delete("search");
      }

      history.push({
        pathname: Routes.SEARCH,
        search: searchParams.toString(),
      });
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
      <div className={clsx(styles.Header__headerSection, styles.Header__headerSection_top)}>
        <Logo />
        <Button id="addMovie" name="+ ADD MOVIE" className={styles.Header__addButton} onClick={onAddMovie} />
      </div>
      <div className={clsx(styles.Header__headerSection, styles.Header__headerSection_bottom)}>
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
          <Button id="search" name="SEARCH" type="submit" className={styles.Header__searchButton} onClick={onSearch} />
        </div>
      </div>
      <Modal id="movieModalWrapper" onCloseModal={onCloseMovieModal} isModalOpen={movieModalStatus}>
        <MovieModal buttonName="Submit" modalTitle="Add movie" />
      </Modal>
    </header>
  );
};

export default SearchHeader;
