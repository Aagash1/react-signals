import React from 'react';
import ItemListNormal from './components/ItemListNormal';
import ItemListSignal from './components/ItemListSignal';

const App = () => {
  return (
    <div>
      <h1>React Signals Optimization Demo</h1>
      <ItemListNormal />
      <ItemListSignal />
    </div>
  );
};

export default App;
