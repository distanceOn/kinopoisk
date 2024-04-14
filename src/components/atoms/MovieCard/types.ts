export type MovieCardProps = {
  isFetching: boolean;
  name: string;
  description: string;
  totalRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
};
