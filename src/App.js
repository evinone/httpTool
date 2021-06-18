import React from "react";
import IndexPage from './pages/IndexPage';

const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  border: '1px solid'
};

const App = () => {
  return (
  <div style={appStyle}>
      <IndexPage />
  </div>
  )
};

export default App;
