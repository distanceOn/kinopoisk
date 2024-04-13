import React from 'react';
import { Carousel, Image } from 'antd';
import { Poster, SimilarMovie } from '../../../utils/types';
import S from './ImgCarousel.module.scss';
import { useNav } from '../../../hooks/useNav';

type PosterCarouselProps = {
  type: 'poster' | 'similar';
  data: Poster[] | SimilarMovie[];
};

export const ImgCarousel: React.FC<PosterCarouselProps> = ({ type, data }) => {
  const { goToMovie } = useNav();
  return (
    <Carousel
      autoplay
      dotPosition='top'
      fade
      infinite
      dots={{
        className: S.dots,
      }}
    >
      {data.map(item => {
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
      })}
    </Carousel>
  );
};
