import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CountryProperties {
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
      fetchCountries: builder.query<CountryProperties, void>({
        query: () => '/all',
      }),
    };
  },
});

export const { useFetchCountriesQuery } = apiSlice;
