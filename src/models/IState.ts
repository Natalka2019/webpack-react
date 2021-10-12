import IMovie from "./IMovie";

interface IState {
  movies: IMovie[];
  getMoviesStatus: {
    loading: boolean;
    success: string | null;
    error: string | null;
  };
}
export default IState;
