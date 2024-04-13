import { Button } from 'antd';
export const Btn = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <Button
      type='primary'
      shape='round'
      icon={<i className='fas fa-arrow-left'></i>}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
