import { ISetSelectedElement, IElement } from './types';

const setSelectedElement = (element: IElement): ISetSelectedElement => ({
  type: 'SET_SELECTED_ELEMENT',
  payload: element,
});

export default setSelectedElement;
