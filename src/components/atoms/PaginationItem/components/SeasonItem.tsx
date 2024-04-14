import { List } from 'antd';
import { Season } from '../../../../utils/types';

import { ItemProps } from '../types';

export const SeasonItem = <T,>({ renderItem }: ItemProps<T>) => {
  const { episodesCount, number } = renderItem as Season;

  return (
    <List.Item>
      Сезон: {number} <br />
      Количество серий: {episodesCount}
    </List.Item>
  );
};
