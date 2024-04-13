import { Radio, RadioChangeEvent } from 'antd';
import { RadioBtnsProps } from './types';

export const RadioBtns = ({ isSeries, value, onChange }: RadioBtnsProps) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };
  return (
    <Radio.Group onChange={handleChange} value={value} defaultValue='actors'>
      <Radio.Button value='actors'>Актеры</Radio.Button>
      {isSeries && <Radio.Button value='seasons'>Сезоны и серии</Radio.Button>}
      <Radio.Button value='reviews'>Отзывы</Radio.Button>
    </Radio.Group>
  );
};
