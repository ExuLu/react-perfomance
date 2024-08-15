import { useMemo, useState } from 'react';
import { Country } from '../types';
import { CountriesList } from './CountriesList.tsx';
import { SelectedCountry } from './SelectedCountry.tsx';
import { Mode, ThemeContext } from './useTheme.ts';

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);
  const [mode, setMode] = useState<Mode>('light');

  const theme = useMemo(() => ({ mode }), [mode]);

  const list = useMemo(() => {
    return (
      <CountriesList
        countries={countries}
        onCountryChanged={(country: Country) => setSelectedCountry(country)}
        savedCountry={savedCountry}
      />
    );
  }, [savedCountry, countries]);

  const selected = useMemo(() => {
    return (
      <SelectedCountry
        country={selectedCountry}
        onSaveCountry={() => setSavedCountry(selectedCountry)}
      />
    );
  }, [selectedCountry]);

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
      <h1>Country settings</h1>
      <div className='content'>
        {list}
        {selected}
      </div>
    </ThemeContext.Provider>
  );
};
