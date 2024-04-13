import { Image } from 'antd';
import { Poster, SimilarMovie } from '../../../utils/types';
import { useNav } from '../../../hooks/useNav';
import { CarouselItemProps } from './types';

export const CarouselItem = ({ type, item }: CarouselItemProps) => {
  const { goToMovie } = useNav();

  if (type === 'poster') {
    const { id, url, previewUrl } = item as Poster;
    return (
      <div key={id}>
        <Image
          src={url}
          fallback={previewUrl}
          preview={false}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }

  if (type === 'similar') {
    const { id, poster, name } = item as SimilarMovie;
    return (
      <div key={id}>
        <Image
          onClick={() => goToMovie(id)}
          title={name}
          src={poster.url}
          fallback={poster.previewUrl}
          preview={false}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }

  return null;
};
