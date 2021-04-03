import { SET_SELECTED_ELEMENT } from '../constants';

// store

export interface IElement {
  title?: string;
  name?: string;
  mass?: number;
  number?: number;
  color?: string;
}

// actions

export interface ISetSelectedElement {
  type: typeof SET_SELECTED_ELEMENT;
  payload: IElement;
}
