import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { genres } from "../../genres.js";
import FiltersContainer from "../FiltersContainer";
import MoviesList from "../MoviesList";
import { IMovie } from "models";

interface Props {
  moviesList: IMovie[];
  onDeleteConfirm: (id: string) => void;
  onSubmit: (movie: IMovie) => void;
  onGenre: (title: string) => void;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SearchResults: React.FC<Props> = ({
  moviesList,
  onDeleteConfirm,
  onSubmit,
  onGenre,
  onSortChange,
}) => {
  return (
    <main className={styles.SearchResults}>
      <div className={styles.SearchResults__filters}>
        <FiltersContainer
          genres={genres}
          onGenre={onGenre}
          onSortChange={onSortChange}
        />
      </div>
      <MoviesList
        moviesList={moviesList}
        onDeleteConfirm={onDeleteConfirm}
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default SearchResults;
