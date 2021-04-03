import { ISetSelectedElement, IElement } from './types';

const initialState: IElement = {
  title: '',
  name: '',
  mass: 0,
  number: 0,
  color: '',
};

const selectedElementReducer = (state = { ...initialState }, { type, payload }: ISetSelectedElement) => {
  switch (type) {
    case 'SET_SELECTED_ELEMENT':
      return { ...payload };

    default:
      return state;
  }
};

export default selectedElementReducer;
