import { ISetSelectedElement, IElement } from './types';

export const setSelectedElement = (element: IElement): ISetSelectedElement => ({
  type: 'SET_SELECTED_ELEMENT',
  payload: element,
});
