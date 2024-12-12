"use client";
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Data from './sac-tab3.json'
import { Columns } from './sac-cols3.jsx'
import './sactab2.css'

export const SacTab3 = () => {
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
                headerGroups.map((headerGroup) =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                        
                    </tr>
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
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



