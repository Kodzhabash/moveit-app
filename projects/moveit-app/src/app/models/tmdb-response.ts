import { tMDBMovie } from "./tmdb-movie";

export interface tMDBResponse {
  page: number;
  results: tMDBMovie[];
  total_pages: number;
  total_results: number;
}
