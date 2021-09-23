import React, { useRef, useState, useEffect } from "react";
import { InputField, Button } from "components";
import { IMovie } from "models";
import styles from "./styles.module.scss";

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
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);
  const movieUrlRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);
  const overviewRef = useRef<HTMLInputElement>(null);
  const runTimeRef = useRef<HTMLInputElement>(null);

  // const formValues = {
  //   id: movie?.id || "",
  //   title: movie?.title || "",
  //   genre: movie?.genre || "",
  //   releaseDate: movie?.releaseDate || "",
  //   overview: movie?.overview || "",
  //   runTime: movie?.runTime || "",
  //   movieUrl: movie?.movieUrl || "",
  // };

  const [formValues, setFormValues] = useState({
    id: movie?.id || "",
    title: movie?.title || "",
    genre: movie?.genre || "",
    releaseDate: movie?.releaseDate || "",
    overview: movie?.overview || "",
    runTime: movie?.runTime || "",
    movieUrl: movie?.movieUrl || "",
  });

  // const movieUpdate = {
  //   id: idRef.current?.value || "",
  //   title: titleRef.current?.value || "",
  //   genre: genreRef.current?.value || "",
  //   releaseDate: releaseDateRef.current?.value || "",
  //   overview: overviewRef.current?.value || "",
  //   runTime: runTimeRef.current?.value || "",
  //   movieUrl: movieUrlRef.current?.value || "",
  // };

  const onReset = () => {
    console.log("Reset");
    // setFormValues({
    //   id: movie?.id || "",
    //   title: movie?.title || "",
    //   genre: movie?.genre || "",
    //   releaseDate: movie?.releaseDate || "",
    //   overview: movie?.overview || "",
    //   runTime: movie?.runTime || "",
    //   movieUrl: movie?.movieUrl || "",
    // });
  };

  const onSubmitForm = () => {
    setFormValues({
      id: idRef.current?.value || "",
      title: titleRef.current?.value || "",
      genre: genreRef.current?.value || "",
      releaseDate: releaseDateRef.current?.value || "",
      overview: overviewRef.current?.value || "",
      runTime: runTimeRef.current?.value || "",
      movieUrl: movieUrlRef.current?.value || "",
    });

    onSubmit({
      id: idRef.current?.value || "",
      title: titleRef.current?.value || "",
      genre: genreRef.current?.value || "",
      releaseDate: releaseDateRef.current?.value || "",
      overview: overviewRef.current?.value || "",
      runTime: runTimeRef.current?.value || "",
      movieUrl: movieUrlRef.current?.value || "",
    });
    console.log(formValues);
  };

  console.log("1", formValues);
  console.log("2", formValues.title);
  // console.log(movieUpdate);
  console.info("3", titleRef.current?.value);

  useEffect(() => console.log("RENDER"));

  return (
    <div className={styles.MovieModal}>
      <div className={styles.MovieModal__title}>{modalTitle}</div>
      <form>
        {modalTitle === "Edit movie" && (
          <InputField ref={idRef} value={formValues.id} label="Movie ID" />
        )}
        <InputField
          ref={titleRef}
          placeholder="Title here"
          // value={movie?.title || ""}
          value={formValues.title}
          label="Title"
        />
        <InputField
          ref={releaseDateRef}
          type="date"
          placeholder="Select Date"
          // value={movie?.releaseDate || ""}
          value={formValues.releaseDate}
          label="Release date"
        />
        <InputField
          ref={movieUrlRef}
          placeholder="Movie URL here"
          // value={movie?.movieUrl || ""}
          value={formValues.movieUrl}
          label="Movie Url"
        />
        <InputField
          ref={genreRef}
          placeholder="Select Genre"
          // value={movie?.genre || ""}
          value={formValues.genre}
          label="Genre"
        />
        <InputField
          ref={overviewRef}
          placeholder="Overview here"
          // value={movie?.overview || ""}
          value={formValues.overview}
          label="Overview"
        />
        <InputField
          ref={runTimeRef}
          placeholder="Runtime here"
          // value={movie?.runTime || ""}
          value={formValues.runTime}
          label="Runtime"
        />

        <div className={styles.MovieModal__buttonsContainer}>
          <Button
            name="Reset"
            onClick={onReset}
            className={`${styles.MovieModal__button} ${styles.MovieModal__button_reset}`}
          />
          <Button
            name={buttonName}
            onClick={onSubmitForm}
            className={styles.MovieModal__button}
            // onClick={() =>
            //   onSubmit({
            //     id: idRef.current?.value || "",
            //     title: titleRef.current?.value || "",
            //     genre: genreRef.current?.value || "",
            //     releaseDate: releaseDateRef.current?.value || "",
            //     overview: overviewRef.current?.value || "",
            //     runTime: runTimeRef.current?.value || "",
            //     movieUrl: movieUrlRef.current?.value || "",
            //   })
            // }
          />
        </div>
      </form>
    </div>
  );
};

export default MovieModal;
