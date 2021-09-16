import React from "react";
import styles from "./styles.module.scss";
import RoundButton from "../RoundButton";

interface Props {
  id: string;
  title: string;
  genre: string;
  date: number;
  imageUrl: string;
}

const Poster: React.FC<Props> = ({ id, title, genre, date, imageUrl }) => {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} />
        <RoundButton className={styles.roundButton} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleYear}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.genre}>{genre}</div>
      </div>
    </div>
  );
};

export default Poster;
