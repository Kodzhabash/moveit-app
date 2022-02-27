export interface tMDBMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // GZA TODO : ? how to handle genres
  id: number
  media_type: string; // GZA TODO : add enum for media type
  original_language: string; // GZA TODO : add enum for languages
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}