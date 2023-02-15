import { format } from 'date-fns';
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
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
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
