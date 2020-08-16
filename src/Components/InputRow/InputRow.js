import React from 'react';
import './InputRow-style.css';

const InputRow = props => {

   const {value, inputName, handleChange} = props

   return(
      <div className="row-wrapper">
         <input type="number" name={inputName} placeholder='£00.00' onChange={handleChange} className="input-field" value={value} />
      </div>
   )
}

export default InputRow;