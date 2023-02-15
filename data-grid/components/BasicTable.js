import React, { useMemo } from 'react';
import { columnsInfo, GROUPED_COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import { useTable } from 'react-table';
import styles from './BasicTable.module.css';

const BasicTable = () => {
  //Use the below code for grouping headers
  const columns = useMemo(() => GROUPED_COLUMNS, []);

  // const columns = useMemo(() => columnsInfo, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table {...getTableProps()} className={styles['table-sample']}>
      <thead className={styles['th-sample']}>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={styles['tr-sample']}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className={styles['th-sample']}>
                {column.render('Header')}
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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
export default BasicTable;
