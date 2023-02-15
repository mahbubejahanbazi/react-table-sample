export const cols = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Birth Date',
    Footer: 'Birth Date',
    accessor: 'birth_date',
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'IP Address',
    Footer: 'IP Address',
    accessor: 'ip_address',
  },
];

export const GROUPED_COLUMNS = [
  { Header: 'ID', Footer: 'ID', accessor: 'id' },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Birth Date',
        Footer: 'Birth Date',
        accessor: 'birth_date',
      },
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'IP Address',
        Footer: 'IP Address',
        accessor: 'ip_address',
      },
    ],
  },
];
