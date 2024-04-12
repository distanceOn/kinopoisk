import { RadioBtns } from '../../molecules/RadioBtns/RadioBtns';
import { useMovieDetails } from './useMovieDetails';

export const MovieDetails = () => {
  const { selectedValue, handleChangeDetails } = useMovieDetails();

  return (
    <div>
      <RadioBtns onChange={handleChangeDetails} value={selectedValue} />
    </div>
  );
};
