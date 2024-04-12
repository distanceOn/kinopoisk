import { useState } from 'react';

export const useMovieDetails = () => {
  const [selectedValue, setSelectedValue] = useState('actors');

  const handleChangeDetails = (value: string) => {
    setSelectedValue(value);
  };

  return { handleChangeDetails, selectedValue };
};
