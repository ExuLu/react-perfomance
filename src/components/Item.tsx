import { Country } from '../types';
import { useTheme } from './useTheme';

type ItemProps = {
  country: Country;
  savedCountryId: string;
  onCountryChanged: (country: Country) => void;
};

export const Item = ({
  country,
  savedCountryId,
  onCountryChanged,
}: ItemProps) => {
  const { mode } = useTheme();

  const className = `country-item ${
    savedCountryId === country.id ? 'saved' : ''
  } ${mode === 'dark' ? 'dark' : ''}`;
  const onItemClick = () => onCountryChanged(country);

  return (
    <button className={className} onClick={onItemClick}>
      <img
        width={50}
        style={{ marginRight: '8px' }}
        alt={country.name}
        src={country.flagUrl}
      />
      <div>{country.name}</div>
    </button>
  );
};
