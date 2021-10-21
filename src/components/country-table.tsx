import { Table, Tag } from 'antd';
import { CountryProperties } from '../features/countries/countries-slice-api';
import { v4 } from 'uuid'

interface TableProperties {
  data: CountryProperties[];
}

const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
  },
  {
    title: 'Flag',
    dataIndex: 'flag',
    key: 'flag',
    render: (flag: string) => <img height={30} width={70} src={flag} alt='Flag' />,
  },
  {
    title: 'Languages',
    key: 'languages',
    dataIndex: 'languages',
    render: (languages: string[]) => (
      <>
        {languages?.map((language) => (
          <Tag key={v4()}>{language}</Tag>
        ))}
      </>
    ),
  },
];

export function CountryTable({ data }: TableProperties) {
  return <Table dataSource={data} columns={COLUMNS} />;
}
