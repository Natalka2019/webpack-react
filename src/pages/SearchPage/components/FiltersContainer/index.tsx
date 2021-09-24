import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { Button, SelectField } from "components";

const sortOptions = ["Release date", "Title", "Genre"];

interface Props {
  genres: string[];
  onGenre: (title: string) => void;
}

const FiltersContainer: React.FC<Props> = ({ genres, onGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const onGenreChange = useCallback((title: string) => {
    setSelectedGenre(title);
    onGenre(title);
  }, []);

  console.log(selectedGenre);

  const selectedGenreClassName = `${styles.FiltersContainer__genre} ${styles.FiltersContainer__genre_selected}`;
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
        <SelectField optionsList={sortOptions} label="Sort by" />
      </div>
    </div>
  );
};

export default FiltersContainer;
