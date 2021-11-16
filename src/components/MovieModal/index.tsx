import React from "react";
import FormInputField from "../FormInputField";
import Button from "../Button";
import SelectComponent from "../SelectComponent";
import { IMovie } from "models";
import styles from "./styles.module.scss";
import { genres, genresTypes } from "../../common";
import { useForm, Controller } from "react-hook-form";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  movie?: IMovie;
  buttonName: string;
  modalTitle: string;
  id?: string;
}

const MovieModal: React.FC<Props> = ({ movie, buttonName, modalTitle, id }) => {
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
    release_date: movie?.release_date || null,
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
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = ({ values, closeModal }: { values?: any; closeModal: boolean }, e: any) => {
    e.preventDefault();
    if (closeModal) {
      const movie = {
        ...values,
        id: values.id ? Number(values.id) : undefined,
        release_date: values.release_date.toISOString().split("T")[0],
        runtime: Number(values.runtime),
        genres: values.genres.map((genre: { value: string; label: string }) => genre.value),
      };
      dispatch(actions.movieActions.addEditMovie(movie));
    } else {
      reset(initialValues);
    }
  };

  const genresList = genres.filter((genre) => genre.value !== genresTypes.All);

  return (
    <div className={styles.MovieModal} id={id}>
      <div className={styles.MovieModal__title}>{modalTitle}</div>
      <form
        className={styles.MovieModal__form}
        onSubmit={handleSubmit((values, e) => onSubmit({ values, closeModal: true }, e))}
        id="movieModalForm"
      >
        {initialValues.id && <FormInputField name="id" register={register} label="Movie ID" readOnly />}
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
              label="Genre"
              placeholder="Select genre"
              error={(errors.genres as any)?.message}
              isMulti={true}
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
            className={styles.MovieModal__button}
          />
          <Button
            name={buttonName}
            type="submit"
            className={styles.MovieModal__button}
            isDisabled={Object.keys(errors).length > 0}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieModal;
