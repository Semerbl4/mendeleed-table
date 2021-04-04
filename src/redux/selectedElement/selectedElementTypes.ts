export const SET_SELECTED_ELEMENT = 'SET_SELECTED_ELEMENT';

// store

export interface IElement {
  id?: number,
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
