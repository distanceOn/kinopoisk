export type Movie = {
  name: string;
  alternativeName: string;
  year: number;
  countries: { name: string }[];
  ageRating: number | null;
};

export type SortType = 'year' | 'countries.name' | 'ageRating';
