import React from 'react';

interface Iprops {
    children : string | number | Element | JSX.Element | Element[];
}

const TableColumn = (children : Iprops ) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default TableColumn;