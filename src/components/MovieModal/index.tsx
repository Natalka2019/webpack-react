import React, { useState, ChangeEvent } from "react";
import { InputField, Button, SelectField } from "components";
import { IMovie } from "models";
import styles from "./styles.module.scss";
import { genres } from "../../mockData/genres";
import clsx from "clsx";

interface Props {
  movie?: IMovie;
  buttonName: string;
  modalTitle: string;
  onSubmit: (movie: IMovie) => void;
}

const MovieModal: React.FC<Props> = ({
  movie,
  onSubmit,
  buttonName,
  modalTitle,
}) => {
  const [formValues, setFormValues] = useState({
    id: movie?.id || "",
    title: movie?.title || "",
    genre: movie?.genre || "",
    releaseDate: movie?.releaseDate || "",
    overview: movie?.overview || "",
    runTime: movie?.runTime || "",
    movieUrl: movie?.movieUrl || "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setFormValues({
      id: movie?.id || "",
      title: movie?.title || "",
      genre: movie?.genre || "",
      releaseDate: movie?.releaseDate || "",
      overview: movie?.overview || "",
      runTime: movie?.runTime || "",
      movieUrl: movie?.movieUrl || "",
    });
  };

  const genresList = genres.filter((genre) => genre !== "All");

  return (
    <div className={styles.MovieModal}>
      <div className={styles.MovieModal__title}>{modalTitle}</div>
      <form className={styles.MovieModal__form}>
        {formValues.id && (
          <InputField
            name="id"
            value={formValues.id}
            label="Movie ID"
            onChange={onChange}
            readOnly
          />
        )}
        <InputField
          name="title"
          placeholder="Title here"
          value={formValues.title}
          label="Title"
          onChange={(e) => onChange(e)}
        />
        <InputField
          name="releaseDate"
          type="date"
          placeholder="Select Date"
          value={formValues.releaseDate}
          label="Release date"
          onChange={onChange}
        />
        <InputField
          name="movieUrl"
          placeholder="Movie URL here"
          value={formValues.movieUrl}
          label="Movie Url"
          onChange={onChange}
        />
        <SelectField
          containerClassName={styles.selectContainer}
          labelClassName={styles.selectLabel}
          selectClassName={styles.selectField}
          optionsList={genresList}
          label="Genre"
          placeholder="Select genre"
          selectedValue={formValues.genre}
          onChange={onChange}
          name="genre"
        />
        <InputField
          name="overview"
          placeholder="Overview here"
          value={formValues.overview}
          label="Overview"
          onChange={onChange}
        />
        <InputField
          name="runTime"
          placeholder="Runtime here"
          value={formValues.runTime}
          label="Runtime"
          onChange={onChange}
        />

        <div className={styles.MovieModal__buttonsContainer}>
          <Button
            name="Reset"
            onClick={onReset}
            className={clsx(
              styles.MovieModal__button,
              styles.MovieModal__button_reset
            )}
          />
          <Button
            name={buttonName}
            onClick={() => onSubmit(formValues)}
            className={styles.MovieModal__button}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieModal;
