import { Input } from 'antd';
import { useAppDispatch } from '../../../app/reduxHooks';
import { setSearch } from '../../../app/reducers/moviesSlice';
import { debounce } from 'lodash';
import { SetStateAction, useRef, useState } from 'react';

export const Search = () => {
  const [localSearch, setLocalSearch] = useState('');
  const dispatch = useAppDispatch();

  const debouncedSetSearchRef = useRef(
    debounce(value => {
      dispatch(setSearch(value));
    }, 500)
  );

  const handleOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocalSearch(event.target.value);
    debouncedSetSearchRef.current(event.target.value);
  };

  return <Input onChange={handleOnChange} value={localSearch} />;
};
