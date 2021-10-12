import axios from "./axiosClient";
import { IMovie } from "models";

export const getMovies = () => axios.get<IMovie[]>(`movies`);
