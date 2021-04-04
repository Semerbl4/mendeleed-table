import { combineReducers } from 'redux';
import selectedElementReducer from './selectedElement/selectedElementReducer';

const rootReducer = combineReducers({
  selectedElement: selectedElementReducer,
});

export default rootReducer;
