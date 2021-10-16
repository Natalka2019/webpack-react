interface IOption {
  value: string;
  label: string;
}
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
  runtime: number;
  genres: string[];
}
