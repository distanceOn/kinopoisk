export type Movie = {
  id: number;
  name: string;
  alternativeName: string;
  year: number;
  countries: { name: string }[];
  ageRating: number | null;
};

export type Person = {
  enName: string;
  description: string;
  name: string;
  photo: string;
};

export type Season = {
  episodesCount: number;
  number: number;
};

export type Review = {
  author: string;

  date: string;
  review: string;
  type: string;
};

export type Poster = {
  id: string;
  url: string;
  previewUrl: string;
};

export type SimilarMovie = {
  id: number;
  name: string;
  poster: {
    url: string;
    previewUrl: string;
  };
};

export type getReviewsType = {
  id: number;
};

export type ListType = 'movies' | 'actors' | 'reviews' | 'seasons';

export type SortType = 'year' | 'countries.name' | 'ageRating';
