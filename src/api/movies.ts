import axios from "./axiosClient";
import { IMovie } from "models";

export const getMovies = () => axios.get<IMovie[]>(`movies`);

export const getMovie = (id: number) => axios.get<IMovie[]>(`movies/${id}`);
