import { Poster, SimilarMovie } from '../../../utils/types';

export type CarouselItemProps = {
  type: 'poster' | 'similar';
  item: Poster | SimilarMovie;
};
