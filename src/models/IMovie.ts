export default interface IMovie {
  id?: string;
  title: string;
  genre: string;
  releaseDate: string | null;
  overview: string;
  runTime: string;
  movieUrl: string;
}
