import React from 'react';
import './App.css';
import UserTable from './table.component';
import { Provider } from 'react-redux';
import { store } from './redux/redux';
import FormInput from './form.component'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormInput />
        <UserTable />
      </div>
    </Provider>

  );
}

export default App;
