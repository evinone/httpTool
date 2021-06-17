import React from "react";
import IndexPage from './pages/IndexPage';
import { Provider } from 'react-redux';
import store from './store';

const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  border: '1px solid'
};

const App = () => {
  return (
  <div style={appStyle}>
    <Provider store={ store }>
      <IndexPage />
    </Provider>
  </div>
  )
};

export default App;
