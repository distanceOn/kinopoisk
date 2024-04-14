import { Card, Image, List, Spin } from 'antd';
import { MovieItemProps } from '../types';
import { Movie } from '../../../../utils/types';
import Placeholder from '../../../../app/assets/imgs/placeholder.png';
import Meta from 'antd/es/card/Meta';
import { truncate } from 'lodash';

import S from './styles.module.scss';

export const MovieItem = <T,>({ renderItem, onClick }: MovieItemProps<T>) => {
  const { id, name, alternativeName, year, countries, ageRating, poster } =
    renderItem as Movie;

  const totalName = name ? name : alternativeName;
  const imageUrl = poster?.url || Placeholder;
  const previewUrl = poster?.previewUrl || Placeholder;
  const totalCountry = truncate(
    countries.map(country => country.name).join(', '),
    { length: 25 }
  );

  return (
    <List.Item className={S.container} onClick={() => onClick(id)}>
      <Card
        classNames={{ cover: S.cover }}
        size='small'
        cover={
          <Image
            width={'100%'}
            className={S.image}
            placeholder={
              <div className={S.spin}>
                <Spin />
              </div>
            }
            preview={false}
            src={imageUrl}
            fallback={previewUrl}
          />
        }
      >
        <Meta
          title={totalName}
          description={
            <>
              {year} <br />
              {totalCountry} <br />
              Возрастной рейтинг: {ageRating ? ageRating : 'нет'}
            </>
          }
        />
      </Card>
    </List.Item>
  );
};
