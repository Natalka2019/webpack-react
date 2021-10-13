interface IMoviesRequestParams {
  search: string;
  limit: number;
  offset: number;
  sortBy: string;
  sortOrder: string;
  searchBy: string;
  filter: string[];
}

export default IMoviesRequestParams;
