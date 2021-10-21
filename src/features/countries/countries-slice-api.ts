import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CountryProperties {
  name: string;
  capital: string;
  languages: string[];
  flag: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),
  endpoints(builder) {
    return {
      fetchCountries: builder.query<CountryProperties[], void>({
        query: () => '/all',
        transformResponse: (response: any) => {
          const parseCountries: CountryProperties[] = response.map(
            (country: any) => ({
              capital: country?.capital?.[0],
              flag: country?.flags.png,
              name: country?.name?.common,
              languages: Object.values(country?.languages || {}),
            })
          );

          return parseCountries;
        },
      }),
    };
  },
});

export const { useFetchCountriesQuery } = apiSlice;
