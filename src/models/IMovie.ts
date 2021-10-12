// export default interface IMovie {
//   id?: string;
//   title: string;
//   genre: string;
//   rating: number;
//   releaseDate: string | "";
//   overview: string;
//   runTime: string;
//   movieUrl: string;
// }
export default interface IMovie {
  id?: number | undefined;
  title: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget?: number;
  revenue?: number;
  runtime: string;
  genres: string[];
}
