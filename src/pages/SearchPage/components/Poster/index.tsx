import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal } from "components";
import { IMovie } from "models";
import ActivityModal from "../ActivityModal";

interface Props {
  movie: IMovie;
}

const Poster: React.FC<Props> = ({ movie }) => {
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  const { id, title, genre, date, imageUrl } = movie;
  const onManageMovie = () => {
    setIsActivityModalOpen(true);
  };

  const onCloseModal = () => {
    setIsActivityModalOpen(false);
  };

  const onDelete = (id: string) => {
    setIsActivityModalOpen(false);
    console.log(id);
  };

  const onEdit = (id: string) => {
    setIsActivityModalOpen(false);
    console.log(id);
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
      <Modal onCloseModal={onCloseModal} isModalOpen={isActivityModalOpen}>
        <ActivityModal id={id} onDelete={onDelete} onEdit={onEdit} />
      </Modal>
    </>
  );
};

export default Poster;
