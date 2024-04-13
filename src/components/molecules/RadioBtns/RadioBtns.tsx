import { Radio, RadioChangeEvent } from 'antd';
import { ListType } from '../../../utils/types';

export const RadioBtns = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: ListType) => void;
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };
  return (
    <Radio.Group onChange={handleChange} value={value} defaultValue='actors'>
      <Radio.Button value='actors'>Актеры</Radio.Button>
      <Radio.Button value='seasons'>Сезоны и серии</Radio.Button>
      <Radio.Button value='reviews'>Отзывы</Radio.Button>
    </Radio.Group>
  );
};
