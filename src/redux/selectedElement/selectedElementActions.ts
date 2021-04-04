import { ISetSelectedElement, IElement } from './selectedElementTypes';

export const setSelectedElement = (element: IElement): ISetSelectedElement => ({
  type: 'SET_SELECTED_ELEMENT',
  payload: element,
});
