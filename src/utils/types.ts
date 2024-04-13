export type Movie = {
  id: number;
  name: string;
  alternativeName: string;
  year: number;
  countries: { name: string }[];
  ageRating: number | null;
};

export type Person = {
  description: string;
  name: string;
  photo: string;
};

export type ListType = 'movies' | 'actors' | 'reviews' | 'seasons';

export type SortType = 'year' | 'countries.name' | 'ageRating';
