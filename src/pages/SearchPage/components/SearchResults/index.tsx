import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import { movies } from "./movies.js";
import { Poster } from "components";
import { genres } from "./genres.js";
import FiltersContainer from "../FiltersContainer";

const quantity = 39;

const SearchResults: React.FC = () => {
  const onGenre = useCallback((id: string) => {
    console.log(id);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.filters}>
        <FiltersContainer genres={genres} onGenre={onGenre} />
      </div>
      <div className={styles.quantity}>{quantity} movies found</div>
      <div className={styles.posters}>
        {movies &&
          movies.map(({ id, title, image, genre, date }) => (
            <Poster
              key={id}
              id={id}
              title={title}
              imageUrl={image}
              genre={genre}
              date={date}
            />
          ))}
      </div>
    </main>
  );
};

export default SearchResults;
