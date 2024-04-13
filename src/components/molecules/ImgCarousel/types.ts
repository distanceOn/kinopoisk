import { Poster, SimilarMovie } from '../../../utils/types';

export type PosterCarouselProps = {
  type: 'poster' | 'similar';
  data: Poster[] | SimilarMovie[];
};
