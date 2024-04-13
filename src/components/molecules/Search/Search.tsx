import { Input } from 'antd';
import { useSearch } from './useSearch';

export const Search = () => {
  const { handleOnChange, localSearch } = useSearch();

  return <Input onChange={handleOnChange} value={localSearch} />;
};
