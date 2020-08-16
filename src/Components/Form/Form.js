import React from 'react';
import './Form-style.css'
import InputRow from '../InputRow/InputRow'

const Form = props => {

   const {amount1, amount2, changeInput1, changeInput2} = props

   return(
      <div className="form-wrapper">
         <InputRow value={amount1} inputName='input1' handleChange={changeInput1} />
         <InputRow value={amount2} inputName='input2' handleChange={changeInput2} />
      </div>
   )
}

export default Form;