import React, { useContext, useState } from 'react';
import { NumberContext } from '../context/NumberContext';

const InputNumber = () => {
  const [inputValue, setInputValue] = useState("");
  const { setUserNumber } = useContext(NumberContext);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleButtonClick = () => {
    setUserNumber(inputValue);
  };

  return (
    <div className='border w-96 flex'>
    <div className='w-20 border'>
      <input className='border ' type="number" placeholder="Escribe tu numero" value={inputValue} onChange={handleInputChange} />
      <button className='flex w-24 border' onClick={handleButtonClick}>Pasar número</button>
    </div>
    </div>
  );
}


export default InputNumber
