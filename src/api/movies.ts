import axios from "./axiosClient";
import { IMovie } from "models";

export const getMovies = (requestParams: string) => {
  console.log(requestParams);
  return axios.get<IMovie[]>(`movies?${requestParams}`);
};

export const getMovie = (id: number) => axios.get<IMovie[]>(`movies/${id}`);

export const addMovie = (movie: IMovie) => axios.post<IMovie>(`movies`, movie);

export const editMovie = (movie: IMovie) => axios.put<IMovie>(`movies`, movie);

export const deleteMovie = (id: number) => axios.delete<number>(`movies/${id}`);
