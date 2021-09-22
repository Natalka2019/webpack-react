import React from "react";
import styles from "./styles.module.scss";
import RoundButton from "../RoundButton";
import { IMovie } from "models";

const Poster: React.FC<IMovie> = ({ id, title, genre, date, imageUrl }) => {
  return (
    <div className={styles.Poster} id={id}>
      <div className={styles.Poster__imageContainer}>
        <img className={styles.Poster__imageContainer__image} src={imageUrl} />
        <RoundButton className={styles.Poster__imageContainer__roundButton} />
      </div>
      <div className={styles.Poster__info}>
        <div className={styles.Poster__info__titleYear}>
          <div className={styles.Poster__info__titleYear__title}>{title}</div>
          <div className={styles.Poster__info__titleYear__date}>{date}</div>
        </div>
        <div className={styles.Poster__info__genre}>{genre}</div>
      </div>
    </div>
  );
};

export default Poster;
