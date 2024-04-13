import { ListType } from '../../../utils/types';

export type RadioBtnsProps = {
  isSeries: boolean;
  value: string;
  onChange: (value: ListType) => void;
};
