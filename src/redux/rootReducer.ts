import { combineReducers } from 'redux';
import selectedElementReducer from './selectedElementReducer';

const rootReducer = combineReducers({
  selectedElement: selectedElementReducer,
});

export default rootReducer;
