import { Country } from '../types';
import { Item } from './Item.tsx';

type CountriesListProps = {
  countries: Country[];
  onCountryChanged: (country: Country) => void;
  savedCountry: Country;
};

export const CountriesList = ({
  countries,
  onCountryChanged,
  savedCountry,
}: CountriesListProps) => {
  return (
    <div className='countries-list'>
      {countries.map((country) => (
        <Item
          key={country.id}
          country={country}
          savedCountryId={savedCountry.id}
          onCountryChanged={onCountryChanged}
        />
      ))}
    </div>
  );
};
