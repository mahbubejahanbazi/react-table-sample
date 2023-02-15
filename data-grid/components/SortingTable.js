import React, { useMemo } from 'react';
import { cols } from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import { useTable, useSortBy } from 'react-table';
import styles from './SortingTable.module.css';

const SortingTable = () => {
  const columns = useMemo(() => cols, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);
  return (
    <table {...getTableProps()} className={styles['table-sample']}>
      <thead className={styles['th-sample']}>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={styles['tr-sample']}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={styles['th-sample']}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' \u25BC'
                      : ' \u25B2'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles['tr-sample']}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles['td-sample']}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className={styles['tfoot-sample']}>
        {footerGroups.map((footerGroup) => (
          <tr
            {...footerGroup.getFooterGroupProps()}
            className={styles['tr-sample']}
          >
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()} className={styles['td-sample']}>
                {column.render('Footer')}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
export default SortingTable;
