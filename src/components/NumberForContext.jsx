import React, { useContext } from 'react';
import { NumberContext } from '../context/NumberContext';

const NumberForContext = () => {
  const { userNumber } = useContext(NumberContext);

  return (
    <div>
      <p>Número del Usuario: {userNumber}</p>
    </div>
  );
}


export default NumberForContext
