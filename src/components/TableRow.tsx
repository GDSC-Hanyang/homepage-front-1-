import React from 'react';

interface Iprops {
    key : number,
    children: Element[]
}

const TableRow = ( children : Iprops ) => {
  return (
    <tr className="common-table-row">
      {
        children
      }
    </tr>
  )
}

export default TableRow;