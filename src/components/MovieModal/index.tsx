import React from "react";
import { FormInputField, Button, SelectComponent } from "components";
import { IMovie } from "models";
import styles from "./styles.module.scss";
import { genres } from "../../mockData/genres";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import * as actions from "store/actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const initialValues = {
    id: movie?.id || undefined,
    title: movie?.title || "",
    genres:
      movie?.genres.map((genre) => {
        return {
          value: genre,
          label: genre,
        };
      }) || [],
    release_date: movie?.release_date || "",
    overview: movie?.overview || "",
    runtime: movie?.runtime || undefined,
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
    { values, closeModal }: { values?: any; closeModal: boolean },
    e: any
  ) => {
    e.preventDefault();

    if (closeModal) {
      console.log(values);
      const movie = {
        ...values,
        runtime: Number(values.runtime),
        genres: values.genres.map(
          (genre: { value: string; label: string }) => genre.value
        ),
      };
      console.log(movie);
      dispatch(actions.movieActions.addEditMovie(movie));
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
          error={errors.release_date?.message}
        />
        <FormInputField
          name="poster_path"
          placeholder="Movie URL here"
          register={register}
          label="Movie Url"
          error={errors.poster_path?.message}
        />
        <Controller
          name="genres"
          control={control}
          render={({ field: { ref, ...rest }, fieldState }) => (
            <SelectComponent
              {...rest}
              {...fieldState}
              options={genresList}
              name="genres"
              initialValue={initialValues.genres}
              // containerClassName={styles.selectContainer}
              // labelClassName={styles.selectLabel}
              // selectClassName={styles.selectField}
              label="Genre"
              placeholder="Select genre"
              error={errors.genres?.join(",")}
              isMulti={true}
              // selectedValue={formValues.genres}
            />
          )}
        />

        <FormInputField
          name="overview"
          placeholder="Overview here"
          register={register}
          label="Overview"
          error={errors.overview?.message}
        />
        <FormInputField
          name="runtime"
          placeholder="Runtime here"
          register={register}
          label="Runtime"
          error={errors.runtime?.message}
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
