import React from "react";
import styles from "./styles.module.scss";
import { SearchResults } from "containers";
import { Footer } from "components";
import { useParams } from "react-router-dom";
import { movies } from "../../mockData/movies";
import { IMovie } from "models";

interface ParamTypes {
  id: string;
}

const SearchPage: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const movie = movies.find((movie: IMovie) => movie.id === id);
  console.log(movie);
  return (
    <div className={styles.SearchPage}>
      <SearchResults />
      <Footer />
    </div>
  );
};

export default SearchPage;
