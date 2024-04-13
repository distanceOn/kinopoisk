import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks';
import { setSearch } from '../../../app/reducers/moviesSlice';
import { debounce } from 'lodash';
import { SetStateAction, useEffect, useRef, useState } from 'react';

export const useSearch = () => {
  const { search } = useAppSelector(state => state.movies);
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

  useEffect(() => {
    if (localSearch === '' && search !== '') {
      setLocalSearch(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { handleOnChange, localSearch };
};
