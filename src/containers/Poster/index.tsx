import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal, MovieModal, DeleteModal } from "components";
import { IMovie } from "models";
import ActivityModal from "../ActivityModal";
import { useHistory } from "react-router-dom";
import Routes from "../../routes";

interface Props {
  movie: IMovie;
  onDeleteConfirm: (id: number) => void;
  onSubmitForm: (movie: IMovie) => void;
}

const Poster: React.FC<Props> = ({ movie, onDeleteConfirm, onSubmitForm }) => {
  const history = useHistory();
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { id, title, genres, release_date, poster_path } = movie;
  const date = new Date(release_date);
  const releaseYear = date.getFullYear();

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

  const onImage = () => {
    history.push(`${Routes.MOVIE}/${movie.id}`);
  };

  return (
    <>
      <div className={styles.Poster}>
        <div className={styles.Poster__imageContainer}>
          <img
            className={styles.Poster__image}
            src={poster_path}
            onClick={onImage}
          />
          <RoundButton
            className={styles.Poster__roundButton}
            onClick={onManageMovie}
          />
        </div>
        <div className={styles.Poster__info}>
          <div className={styles.Poster__title}>{title}</div>
          <div className={styles.Poster__dateGenre}>
            <div className={styles.Poster__genre}>{genres.join(", ")}</div>
            <div className={styles.Poster__date}>{releaseYear}</div>
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
