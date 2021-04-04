import './scss/App.scss'

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Table } from './components/Table/Table';
import { SelectedElement } from './components/SelectedElement/SelectedElement';

const App: React.FC = () => (
  <Provider store={store}>
    <Table />
    <SelectedElement />
  </Provider>
);

export default App;
