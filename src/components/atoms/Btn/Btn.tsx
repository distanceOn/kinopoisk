import { Button } from 'antd';
export const Btn = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <Button type='primary' shape='round' onClick={handleClick}>
      {text}
    </Button>
  );
};
