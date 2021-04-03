import './Table.css';

import { nanoid } from 'nanoid';
import { connect } from 'react-redux';

import cn from 'classnames';
import React from 'react';

import { mendeleevTable } from '../../constants';

import setSelectedElement from '../../redux/actions';

import { IElement } from '../../redux/types';

interface IProps {
  setSelectedElement: (element: IElement) => void;
}

const Table: React.FunctionComponent<IProps> = ({ setSelectedElement }: IProps) => {
  const createElementRows = () =>
    mendeleevTable.map((element, index) => (
      <tr className="table__row" key={nanoid()}>
        <td className="table__brick">{index + 1}</td>
        <td className="table__brick">{index + 1}</td>
        {element.map((el) => (
          <td
            key={nanoid()}
            className={cn({
              'element-brick': true,
              'element-brick_border': el.number,
              'element-brick_yellow': el.color === 'yellow',
              'element-brick_blue': el.color === 'blue',
              'element-brick_pink': el.color === 'pink',
            })}
          >
            {el.title && (
              <button type='button'
                onClick={() => setSelectedElement(el)}
                disabled={!el.title}
                name={el.title}
                className="element-brick__inner-container  button_custom-styles"
              >
                <div className="element-brick__number">{el.number}</div>
                <div className="element-brick__title">{el.title}</div>
                <div className="element-brick__name" lang='en'>{el.name}</div>
                <div>{el.mass}</div>
              </button>
            )}
          </td>
        ))}
      </tr>
    ));

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

export default connect(null, { setSelectedElement })(Table);
