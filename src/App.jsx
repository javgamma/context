import React from 'react';
import './App.css';
import NumberContextProvider from './context/NumberContext';
import NumberForContext from './components/NumberForContext';
import InputNumber from './components/InputNumber';

function App() {
  return (
    <NumberContextProvider>
    <InputNumber/>
    <NumberForContext/>
    </NumberContextProvider>
  );
}

export default App;
