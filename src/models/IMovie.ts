export default interface IMovie {
  id?: string;
  title: string;
  genre: string;
  rating: number;
  releaseDate: string | "";
  overview: string;
  runTime: string;
  movieUrl: string;
}
