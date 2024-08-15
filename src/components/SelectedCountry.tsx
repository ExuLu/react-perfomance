import { Country } from '../types';

type SelectedCountryProps = {
  country: Country;
  onSaveCountry: () => void;
};

export const SelectedCountry = ({
  country,
  onSaveCountry,
}: SelectedCountryProps) => {
  return (
    <div className='selected-container'>
      <div className='selected-info'>
        <ul>
          <li>Country: {country.name}</li>
          <li>Capital: {country.capital}</li>
          <li>Region: {country.region}</li>
          <li>Subregion: {country.subregion}</li>
        </ul>
        <button
          className='selected-button'
          onClick={onSaveCountry}
          type='button'
        >
          Save
        </button>
      </div>
      <img src={country.flagUrl} className='selected-flag' alt={country.name} />
    </div>
  );
};
