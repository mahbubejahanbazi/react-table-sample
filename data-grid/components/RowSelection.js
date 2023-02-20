import React, { useMemo } from 'react';
import { cols } from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import { useTable, useRowSelect } from 'react-table';
import { Checkbox } from './Checkbox';
import styles from './RowSelection.module.css';

const RowSelection = () => {
  const columns = useMemo(() => cols, []);
  const data = useMemo(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({ columns, data }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ];
    });
  });
  const firstPageRows = rows.slice(0, 10);
  return (
    <>
      <table {...getTableProps()} className={styles['table-sample']}>
        <thead className={styles['th-sample']}>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className={styles['tr-sample']}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column)}
                  className={styles['th-sample']}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles['tr-sample']}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
                <td
                  {...column.getFooterProps()}
                  className={styles['tr-sample']}
                >
                  {column.render('Footer')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <pre>
        <code>
          {JSON.stringify(
            { selectedFlatRows: selectedFlatRows.map((row) => row.original) },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};
export default RowSelection;
