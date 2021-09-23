import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal, MovieModal, DeleteModal } from "components";
import { IMovie } from "models";
import ActivityModal from "../ActivityModal";

interface Props {
  movie: IMovie;
  onDeleteConfirm: (id: string) => void;
}

const Poster: React.FC<Props> = ({ movie, onDeleteConfirm }) => {
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { id, title, genre, releaseDate, movieUrl } = movie;
  const onManageMovie = () => {
    setIsActivityModalOpen(true);
  };

  const onCloseActivityModal = () => {
    setIsActivityModalOpen(false);
  };

  const onDelete = (id: string) => {
    setIsActivityModalOpen(false);
    setIsDeleteModalOpen(true);
    console.log(id);
  };

  const onEdit = (id: string) => {
    setIsActivityModalOpen(false);
    setIsMovieModalOpen(true);
    console.log(id);
  };

  const onCloseMovieModal = () => {
    setIsMovieModalOpen(false);
  };
  const onCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onSubmit = (movie: IMovie) => {
    console.log("Poster", movie);
  };

  return (
    <>
      <div className={styles.Poster} id={id}>
        <div className={styles.Poster__imageContainer}>
          <img className={styles.Poster__image} src={movieUrl} />
          <RoundButton
            className={styles.Poster__roundButton}
            onClick={onManageMovie}
          />
        </div>
        <div className={styles.Poster__info}>
          <div className={styles.Poster__title}>{title}</div>
          <div className={styles.Poster__dateGenre}>
            <div className={styles.Poster__genre}>{genre}</div>
            <div className={styles.Poster__date}>{releaseDate}</div>
          </div>
        </div>
      </div>
      {id && (
        <>
          <Modal
            onCloseModal={onCloseActivityModal}
            isModalOpen={isActivityModalOpen}
          >
            <ActivityModal id={id} onDelete={onDelete} onEdit={onEdit} />
          </Modal>
          <Modal
            onCloseModal={onCloseMovieModal}
            isModalOpen={isMovieModalOpen}
          >
            <MovieModal
              movie={movie}
              onSubmit={onSubmit}
              buttonName="Save"
              modalTitle="Edit movie"
            />
          </Modal>
          <Modal
            onCloseModal={onCloseDeleteModal}
            isModalOpen={isDeleteModalOpen}
          >
            <DeleteModal id={id} onConfirm={onDeleteConfirm} />
          </Modal>
        </>
      )}
    </>
  );
};

export default Poster;
