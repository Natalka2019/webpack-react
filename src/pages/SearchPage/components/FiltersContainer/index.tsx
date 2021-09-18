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

  const selectedGenreClassName = `${styles.genre} ${styles.selected}`;
  return (
    <div className={styles.container}>
      <div className={styles.genres}>
        {genres &&
          genres.map(({ id, title }) => (
            <Button
              key={id}
              id={id}
              className={
                id === selectedGenre ? selectedGenreClassName : styles.genre
              }
              name={title}
              onClick={() => onGenreChange(id)}
            />
          ))}
      </div>
      <div className={styles.sort}>
        <span className={styles.title}>Sort by</span>
        <select className={styles.select}>
          <option>Release date</option>
          <option>Title</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersContainer;
