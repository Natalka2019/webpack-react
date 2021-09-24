import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal, MovieModal, DeleteModal } from "components";
import { IMovie } from "models";
import ActivityModal from "../ActivityModal";

interface Props {
  movie: IMovie;
  onDeleteConfirm: (id: string) => void;
  onSubmitForm: (movie: IMovie) => void;
}

const Poster: React.FC<Props> = ({ movie, onDeleteConfirm, onSubmitForm }) => {
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

  const onDelete = () => {
    setIsActivityModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  const onEdit = () => {
    setIsActivityModalOpen(false);
    setIsMovieModalOpen(true);
  };

  const onCloseMovieModal = () => {
    setIsMovieModalOpen(false);
  };
  const onCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onSave = (movie: IMovie) => {
    onSubmitForm(movie);
    setIsMovieModalOpen(false);
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
              onSubmit={onSave}
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