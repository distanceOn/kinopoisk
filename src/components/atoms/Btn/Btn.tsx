import { Button } from 'antd';
import { BtnProps } from './types';
export const Btn = ({ text, handleClick }: BtnProps) => {
  return (
    <Button type='primary' shape='round' onClick={handleClick}>
      {text}
    </Button>
  );
};
