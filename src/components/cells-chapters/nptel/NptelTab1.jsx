"use client";
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Data from './nptel-tab1.json'
import { Columns } from './nptel-cols1.jsx'
import './npteltab1.css'

export const NptelTab1 = () => {
    const columns=useMemo(()=>Columns,[])
    const data=useMemo(()=>Data,[])
    console.log(data);

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup , index) =>(
                    <tr {...headerGroup.getHeaderGroupProps()} key = {index}>
                        {
                            headerGroup.headers.map((column, index)=>(
                                <th key = {index} {...column.getHeaderProps()}>{column.render('Header') }</th>
                            ))
                        }
                        
                    </tr>
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row, index) => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()} key={row.id}>
                            {
                                row.cells.map((cell)=>{
                                    return(<td {...cell.getCellProps()} key={cell.column.id} data-label={cell.column.Header}>{cell.render('Cell')}</td>)
                                })
                            }

                        </tr>
                    )
                })
            }
            
        </tbody>
      </table>
    </div>
  )
}



