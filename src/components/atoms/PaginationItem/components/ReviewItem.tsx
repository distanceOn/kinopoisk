import { List } from 'antd';
import { Review } from '../../../../utils/types';

import { ItemProps } from '../types';

export const ReviewItem = <T,>({ renderItem }: ItemProps<T>) => {
  const { author, date, review, type } = renderItem as Review;

  return (
    <List.Item>
      {author} <br />
      {date} <br />
      {review} <br />
      {type}
    </List.Item>
  );
};
