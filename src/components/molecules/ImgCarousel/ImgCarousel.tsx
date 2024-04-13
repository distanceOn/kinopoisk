import React from 'react';
import { Carousel, Image } from 'antd';
import { Poster } from '../../../utils/types';
import S from './ImgCarousel.module.scss';

type PosterCarouselProps = {
  data: Poster[];
};

export const ImgCarousel: React.FC<PosterCarouselProps> = ({ data }) => {
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
      {data.map(item => (
        <div key={item.id}>
          <Image
            src={item.url}
            fallback={item.previewUrl}
            preview={false}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </Carousel>
  );
};
