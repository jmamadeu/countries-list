import { useFetchCountriesQuery } from './features/countries/countries-slice-api';

import { Typography } from 'antd';
import { CountryTable } from './components/country-table';
import { CountryLabel } from './components/country-label';

function App() {
  const { data = [] } = useFetchCountriesQuery();

  return (
    <>
      <CountryLabel countryTotal={data.length} />

      <CountryTable data={data} />
    </>
  );
}

export default App;
