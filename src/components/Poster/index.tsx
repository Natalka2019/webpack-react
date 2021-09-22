import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal } from "components";
import { IMovie } from "models";

interface Props {
  movie: IMovie;
}

const Poster: React.FC<Props> = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, title, genre, date, imageUrl } = movie;
  const onManageMovie = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.Poster} id={id}>
        <div className={styles.Poster__imageContainer}>
          <img
            className={styles.Poster__imageContainer__image}
            src={imageUrl}
          />
          <RoundButton
            className={styles.Poster__imageContainer__roundButton}
            onClick={onManageMovie}
          />
        </div>
        <div className={styles.Poster__info}>
          <div className={styles.Poster__info__titleYear}>
            <div className={styles.Poster__info__titleYear__title}>{title}</div>
            <div className={styles.Poster__info__titleYear__date}>{date}</div>
          </div>
          <div className={styles.Poster__info__genre}>{genre}</div>
        </div>
      </div>
      <Modal onCloseModal={onCloseModal} isModalOpen={isModalOpen}>
        Hello world!
      </Modal>
    </>
  );
};

export default Poster;
