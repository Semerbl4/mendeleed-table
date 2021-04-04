import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import cn from 'classnames';

import { IElement } from '../../redux/selectedElement/selectedElementTypes';

import './SelectedElement.scss';

export const SelectedElement: React.FC = () => {
  const element = useSelector((state: RootStateOrAny): IElement => state.selectedElement);

  return (
    <div className="selected-element__container">
      {console.log(element)}
      <p className="selected-element__title">Выбранный элемент</p>
      {element.title && (
        <div
          className={cn({
            'selected-element__element_border': true,
            'selected-element__element_pading': true,
            'element-brick__inner-container': true,
            'element-brick_yellow': element.color === 'yellow',
            'element-brick_blue': element.color === 'blue',
            'element-brick_pink': element.color === 'pink',
          })}
        >
          <div className="element-brick__title">{element.title}</div>
          <div className="element-brick__name">{element.name}</div>
          <div>{element.mass}</div>
          <div className="element-brick__number">{element.number}</div>
        </div>
      )}
    </div>
  );
};

