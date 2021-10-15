import React, { useCallback, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { Button, SelectField } from "components";
import { sortOptions } from "common";
import clsx from "clsx";
import * as actions from "store/actions";
import { RootState } from "store/reducers";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  genres: string[];
}

const FiltersContainer: React.FC<Props> = ({ genres }) => {
  const dispatch = useDispatch();
  const moviesRequestParams = useSelector(
    (state: RootState) => state.movieReducer.moviesRequestParams
  );

  const onGenreChange = useCallback((title: string) => {
    if (title === "All") {
      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          filter: ["All"],
        })
      );
    } else {
      dispatch(
        actions.movieActions.updateMoviesRequestParams({
          filter: [title],
        })
      );
    }
    dispatch(
      actions.movieActions.updateMoviesRequestParams({
        offset: 0,
      })
    );
    dispatch(actions.movieActions.getMovies());
  }, []);

  const onSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value.split("_");
    const sortBy = sort.slice(0, sort.length - 1).join("_");
    const sortOrder = sort[sort.length - 1];

    dispatch(
      actions.movieActions.updateMoviesRequestParams({
        offset: 0,
        sortBy: sortBy,
        sortOrder: sortOrder,
      })
    );
    dispatch(actions.movieActions.getMovies());
  }, []);

  const selectedGenreClassName = clsx(
    styles.FiltersContainer__genre,
    styles.FiltersContainer__genre_selected
  );
  return (
    <div className={styles.FiltersContainer}>
      <div className={styles.FiltersContainer__genres}>
        {genres &&
          genres.map((genre) => (
            <Button
              key={genre}
              className={
                moviesRequestParams.filter.includes(genre)
                  ? selectedGenreClassName
                  : styles.FiltersContainer__genre
              }
              name={genre}
              onClick={() => onGenreChange(genre)}
            />
          ))}
      </div>
      <div className={styles.FiltersContainer__sort}>
        <SelectField
          optionsList={sortOptions}
          label="Sort by"
          onChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default FiltersContainer;
