import axios from "./axiosClient";
import { IMovie } from "models";

export const getMovies = (requestParams: string) => {
  console.log(requestParams);
  return axios.get<IMovie[]>(`movies?${requestParams}`);
};

export const getMovie = (id: number) => axios.get<IMovie[]>(`movies/${id}`);
