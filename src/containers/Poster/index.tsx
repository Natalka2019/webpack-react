import React from "react";
import styles from "./styles.module.scss";
import { RoundButton, Modal, MovieModal, DeleteModal } from "@/components";
import { IMovie } from "@/models";
import ActivityModal from "../ActivityModal";
import Routes from "../../routes";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "@/store/actions";
import { RootState } from "@/store/reducers";
interface Props {
  movie: IMovie;
}

const Poster: React.FC<Props> = ({ movie }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isActivityModalOpen, setIsActivityModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState<IMovie | null>(null);

  const { id, title, genres, release_date, poster_path } = movie;
  const date = new Date(release_date);
  const releaseYear = date.getFullYear();

  const deleteMovieStatus = useSelector((state: RootState) => state.movieReducer.deleteMovieStatus);
  const movieModalStatus = useSelector((state: RootState) => state.movieReducer.movieModalStatus);

  const onManageMovie = () => {
    setIsActivityModalOpen(true);
    setSelectedMovie(movie);
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
    dispatch(actions.movieActions.movieModalStatusToggle(true));
  };

  const onCloseMovieModal = () => {
    dispatch(actions.movieActions.movieModalStatusToggle(false));
  };
  const onCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onImage = () => {
    history.push(`${Routes.MOVIE}/${movie.id}`);
  };

  const onDeleteConfirm = () => {
    if (selectedMovie?.id) {
      dispatch(actions.movieActions.deleteMovie(selectedMovie.id));
    }

    if (deleteMovieStatus.success) {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <div className={styles.Poster}>
        <div className={styles.Poster__imageContainer}>
          <img className={styles.Poster__image} src={poster_path} onClick={onImage} id="posterImage" />
          <RoundButton className={styles.Poster__roundButton} onClick={onManageMovie} id="roundButton" />
        </div>

        <div className={styles.Poster__info}>
          <div className={styles.Poster__title}>{title}</div>
          <div className={styles.Poster__dateGenre}>
            <div className={styles.Poster__genre}>{genres.join(", ")}</div>
            <div className={styles.Poster__date}>{releaseYear}</div>
          </div>
        </div>
      </div>
      {selectedMovie && (
        <>
          <Modal onCloseModal={onCloseActivityModal} isModalOpen={isActivityModalOpen} id="activityModalWrapper">
            <ActivityModal id={id} onDelete={onDelete} onEdit={onEdit} />
          </Modal>
          <Modal onCloseModal={onCloseMovieModal} isModalOpen={movieModalStatus} id="movieModalWrapper">
            <MovieModal movie={selectedMovie} buttonName="Save" modalTitle="Edit movie" id="movieModal" />
          </Modal>
          <Modal onCloseModal={onCloseDeleteModal} isModalOpen={isDeleteModalOpen} id="deleteModalWrapper">
            <DeleteModal onConfirm={onDeleteConfirm} id="deleteModal" />
          </Modal>
        </>
      )}
    </>
  );
};

export default Poster;
