import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { IGenre } from "models";
import { Button } from "components";

interface Props {
  genres: IGenre[];
  onGenre: (id: string) => void;
}

const FiltersContainer: React.FC<Props> = ({ genres, onGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0].id);
  const onGenreChange = useCallback((id: string) => {
    console.log(id);
    setSelectedGenre(id);
    onGenre(id);
  }, []);

  const selectedGenreClassName = `${styles.FiltersContainer__genres__genre} ${styles.FiltersContainer__genres__genre_selected}`;
  return (
    <div className={styles.FiltersContainer}>
      <div className={styles.FiltersContainer__genres}>
        {genres &&
          genres.map(({ id, title }) => (
            <Button
              key={id}
              id={id}
              className={
                id === selectedGenre
                  ? selectedGenreClassName
                  : styles.FiltersContainer__genres__genre
              }
              name={title}
              onClick={() => onGenreChange(id)}
            />
          ))}
      </div>
      <div className={styles.FiltersContainer__sort}>
        <span className={styles.FiltersContainer__sort__title}>Sort by</span>
        <select className={styles.FiltersContainer__sort__select}>
          <option>Release date</option>
          <option>Title</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersContainer;
