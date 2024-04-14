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
      className={S.carousel}
      autoplay
      dotPosition='top'
      fade
      infinite
      dots={{
        className: S.dots,
      }}
    >
      {data.map(item => (
        <CarouselItem key={item.id} type={type} item={item} />
      ))}
    </Carousel>
  );
};
