import React, { useCallback, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { Button, SelectField } from "components";
import { sortOptions } from "common";
import clsx from "clsx";

interface Props {
  genres: string[];
  onGenre: (title: string) => void;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FiltersContainer: React.FC<Props> = ({
  genres,
  onGenre,
  onSortChange,
}) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const onGenreChange = useCallback((title: string) => {
    setSelectedGenre(title);
    onGenre(title);
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
                genre === selectedGenre
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
          optionsList={Object.values(sortOptions)}
          label="Sort by"
          onChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default FiltersContainer;
