import React from 'react';
import './CommonTable.less';

type pL = {
  no: number,
  title: string,
  content: string,
  createDate: string,
  writer: string,
}
interface Iprops {
  headersName : string[],
  children : string | JSX.Element[]
}

const Table = (props : Iprops) => {
  const { headersName, children } = props;

  return (
    <table className="common-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}

export default Table;