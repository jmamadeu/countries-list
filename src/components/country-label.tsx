import { Typography } from 'antd';

interface CountryLabelProps {
  countryTotal: number;
}

export function CountryLabel({countryTotal}: CountryLabelProps) {
  return <Typography.Text>Total of {countryTotal} countries</Typography.Text>
}