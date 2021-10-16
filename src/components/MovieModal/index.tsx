import React, { useState, ChangeEvent } from "react";
import { FormInputField, Button, SelectField } from "components";
import { IMovie } from "models";
import styles from "./styles.module.scss";
import { genres } from "../../mockData/genres";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

interface Props {
  movie?: IMovie;
  buttonName: string;
  modalTitle: string;
  onModalClose: () => void;
}

const MovieModal: React.FC<Props> = ({
  movie,
  buttonName,
  modalTitle,
  onModalClose,
}) => {
  const initialValues = {
    id: movie?.id || undefined,
    title: movie?.title || "",
    genres: movie?.genres || [],
    release_date: movie?.release_date || "",
    overview: movie?.overview || "",
    runtime: movie?.runtime || "",
    poster_path: movie?.poster_path || "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ defaultValues: initialValues });

  const onSubmit = (
    { values, closeModal }: { values?: IMovie; closeModal: boolean },
    e: any
  ) => {
    e.preventDefault();

    if (closeModal) {
      console.log(values);
      const movie = { ...values, id: uuidv4() };
      console.log(movie);
      onModalClose();
    } else {
      reset(initialValues);
    }
  };

  const genresList = genres.filter((genre) => genre.value !== "All");

  return (
    <div className={styles.MovieModal}>
      <div className={styles.MovieModal__title}>{modalTitle}</div>
      <form
        className={styles.MovieModal__form}
        onSubmit={handleSubmit((values, e) =>
          onSubmit({ values, closeModal: true }, e)
        )}
      >
        {initialValues.id && (
          <FormInputField
            name="id"
            register={register}
            label="Movie ID"
            readOnly
          />
        )}
        <FormInputField
          label="Title"
          register={register}
          name="title"
          placeholder="Title here"
          error={errors.title?.message}
        />
        <FormInputField
          name="release_date"
          type="date"
          placeholder="Select Date"
          register={register}
          label="Release date"
        />
        <FormInputField
          name="poster_path"
          placeholder="Movie URL here"
          register={register}
          label="Movie Url"
        />
        <Controller
          name="genres"
          control={control}
          render={({ field: { ref, ...rest }, fieldState }) => (
            <SelectField
              {...rest}
              {...fieldState}
              optionsList={genresList}
              name="genres"
              containerClassName={styles.selectContainer}
              labelClassName={styles.selectLabel}
              selectClassName={styles.selectField}
              label="Genre"
              placeholder="Select genre"
              // selectedValue={formValues.genres}
            />
          )}
        />

        <FormInputField
          name="overview"
          placeholder="Overview here"
          register={register}
          label="Overview"
        />
        <FormInputField
          name="runtime"
          placeholder="Runtime here"
          register={register}
          label="Runtime"
        />

        <div className={styles.MovieModal__buttonsContainer}>
          <Button
            name="Reset"
            type="reset"
            onClick={(e) => onSubmit({ closeModal: false }, e)}
            className={clsx(
              styles.MovieModal__button,
              styles.MovieModal__button_reset
            )}
          />
          <Button
            name={buttonName}
            type="submit"
            className={styles.MovieModal__button}
            isDisabled={false}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieModal;
