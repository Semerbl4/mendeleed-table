import './Table.scss';

import React from 'react';

import { mendeleevTable } from '../../constants';

import Row from '../Row/Row';

const Table: React.FunctionComponent = () => {
  const createElementRows = () => mendeleevTable.map((element, index) => <Row element={element} index={index} />);

  return (
    <table className="table">
      <tbody>
        <tr className="table__row">
          <td className="table__brick" rowSpan={3}>
            Периоды
          </td>
          <td className="table__brick" rowSpan={3}>
            Ряды
          </td>
          <td className="table__brick" colSpan={11}>
            Группы элементов
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__brick">I</td>
          <td className="table__brick">II</td>
          <td className="table__brick">III</td>
          <td className="table__brick">IV</td>
          <td className="table__brick">V</td>
          <td className="table__brick">VI</td>
          <td className="table__brick">VII</td>
          <td className="table__brick" colSpan={4}>
            VIII
          </td>
        </tr>
        <tr className="table__row">
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick">
            <div className="table__brick-iner">
              <span>a</span>
              <span>б</span>
            </div>
          </td>
          <td className="table__brick" colSpan={3}>
            <span>б</span>
          </td>
          <td className="table__brick">
            <span>a</span>
          </td>
        </tr>
        {createElementRows()}
      </tbody>
    </table>
  );
};

export default Table;
