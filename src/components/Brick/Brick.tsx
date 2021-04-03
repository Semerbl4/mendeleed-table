import React from 'react';

import './Brick.scss';

import cn from 'classnames';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { IElement } from '../../redux/types';

import { setSelectedElement } from '../../redux';

interface IProps {
  el: IElement;
}

const Brick: React.FC<IProps> = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td
        key={nanoid()}
        id={el.title}
        className={cn({
          'element-brick': true,
          'element-brick_border': el.number,
          'element-brick_yellow': el.color === 'yellow',
          'element-brick_blue': el.color === 'blue',
          'element-brick_pink': el.color === 'pink',
        })}
      >
        {el.title && (
          <button
            type="button"
            onClick={() => dispatch(setSelectedElement(el))}
            disabled={!el.title}
            name={el.title}
            className="element-brick__inner-container  button_custom-styles"
          >
            <div className="element-brick__number">{el.number}</div>
            <div className="element-brick__title">{el.title}</div>
            <div className="element-brick__name" lang="en">
              {el.name}
            </div>
            <div>{el.mass}</div>
          </button>
        )}
      </td>
    </>
  );
};

export default Brick;
