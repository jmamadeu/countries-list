import { Typography } from 'antd';

interface CountryLabelProps {
  countryTotal: number;
}

export function CountryLabel({countryTotal}: CountryLabelProps) {
  return <Typography.Text data-testid="country-label">Total of {countryTotal} countries</Typography.Text>
}