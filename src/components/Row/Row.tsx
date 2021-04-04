import React from 'react';

import './Row.scss';

import { nanoid } from 'nanoid';

import { IElement } from '../../redux/selectedElement/selectedElementTypes';

import { setSelectedElement } from '../../redux';

import { Brick } from '../Brick/Brick';

interface IProps {
  element: Array<IElement>;
  index: number;
}

export const Row: React.FC<IProps> = ({ element, index }) => (
  <tr className="table__row" key={nanoid()}>
    <td className="table__brick">{index + 1}</td>
    <td className="table__brick">{index + 1}</td>
    {element.map((el) => (
      <Brick el={el} setSelectedElement={setSelectedElement} />
    ))}
  </tr>
);
