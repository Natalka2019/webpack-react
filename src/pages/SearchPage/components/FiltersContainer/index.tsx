import React from "react";
import styles from "./styles.module.scss";
import { IGenre } from "models";

interface IGenresList {
  genres: IGenre[];
}

const FiltersContainer: React.FC<IGenresList> = ({ genres }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.genres}>
        {genres &&
          genres.map(({ id, title }) => (
            <li key={id} id={id} className={styles.genre}>
              {title}
            </li>
          ))}
      </ul>
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
