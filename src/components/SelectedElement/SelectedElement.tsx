import React from 'react';
import { connect } from 'react-redux';

import cn from 'classnames';

import { IElement } from '../../redux/types';

import './SelectedElement.css';

interface IProps {
  element: IElement;
}

const SelectedElement: React.FC<IProps> = ({ element }: IProps) => (
  <div className="selected-element_container">
    <p className="selected-title">Выбранный элемент</p>
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

const mapStateToProps = (state: IElement) => ({
  element: state,
});

export default connect(mapStateToProps)(SelectedElement);
