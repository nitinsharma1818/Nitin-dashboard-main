// src/components/Table.js
// src/components/Table.js
import React, {  useMemo } from 'react';
import { useTable } from 'react-table';
import './Table.css';

const Table = () => {
  const data = useMemo(() => [
    { col1: '21EJCI21', col2: 'Madhav Sharma' ,col3:'Accountant'},
    { col1: '21EJCI67', col2: 'Manan Khandelwal',col3:'Junior Accountant' },
    { col1: '21EJCI71', col2: 'Nidhi Agarwal' ,col3:'Graphic Designer'},
    { col1: '21EJCT45', col2: 'Piyush Gautam' ,col3:'TPO(Placement Officer)'},
    { col1: '21EJCS22', col2: 'Brijesh Kumar',col3:'Professor(IT)' },
    { col1: '21ESIT69', col2: 'Kusum Yadav' ,col3:'Junior Assistant(IT)'},
     
  ], []);

  const columns = useMemo(() => [
    { Header: 'ID', accessor: 'col1' },
    { Header: 'Name', accessor: 'col2' },
    { Header: 'Department', accessor: 'col3' },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

