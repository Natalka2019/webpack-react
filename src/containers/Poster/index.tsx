import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal, MovieModal, DeleteModal } from "components";
import { IMovie } from "models";
import ActivityModal from "../ActivityModal";
import Routes from "../../routes";
import posterSubstitution from "assets/sad_icon.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "store/actions";
interface Props {
  movie: IMovie;
}

const Poster: React.FC<Props> = ({ movie }) => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const onImage = () => {
    history.push(`${Routes.MOVIE}/${movie.id}`);
  };

  const onDeleteConfirm = (id: number) => {
    setIsDeleteModalOpen(false);
    dispatch(actions.movieActions.deleteMovie(id));
  };

  const poster =
    poster_path ===
    "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg"
      ? posterSubstitution
      : poster_path;

  return (
    <>
      <div className={styles.Poster}>
        <div className={styles.Poster__imageContainer}>
          <img
            className={styles.Poster__image}
            src={poster}
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
              onModalClose={onCloseMovieModal}
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
