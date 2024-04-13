import { Carousel, Empty } from 'antd';
import S from './ImgCarousel.module.scss';
import { PosterCarouselProps } from './types';
import { CarouselItem } from '../../atoms/CarouselItem/CarouselItem';

export const ImgCarousel = ({ type, data }: PosterCarouselProps) => {
  if (!data) {
    return <Empty description='Нет данных' />;
  }

  return (
    <Carousel
      style={{ width: '30vw', height: 'fit-content', maxHeight: '20vw' }}
      autoplay
      dotPosition='top'
      fade
      infinite
      dots={{
        className: S.dots,
      }}
    >
      {data.map(item => (
        <CarouselItem type={type} item={item} />
      ))}
    </Carousel>
  );
};
