import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';
export const cols = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: ColumnFilter,
  },
  {
    Header: 'Birth Date',
    Footer: 'Birth Date',
    accessor: 'birth_date',
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
    Filter: ColumnFilter,
  },
  {
    Header: 'IP Address',
    Footer: 'IP Address',
    accessor: 'ip_address',
    Filter: ColumnFilter,
  },
];
