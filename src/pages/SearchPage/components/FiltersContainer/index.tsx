import React, { MouseEvent } from "react";
import styles from "./styles.module.scss";
import { IGenre } from "models";
import { Button } from "components";

interface Props {
  genres: IGenre[];
  onGenre: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FiltersContainer: React.FC<Props> = ({ genres, onGenre }) => {
  return (
    <div className={styles.container}>
      <div className={styles.genres}>
        {genres &&
          genres.map(({ id, title }) => (
            <Button
              key={id}
              id={id}
              className={styles.genre}
              name={title}
              onClick={(id) => onGenre(id)}
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
