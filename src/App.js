import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form'
import OutputField from './Components/OutputField/OutputField';
import DarkModeToggle from './Components/DarkModeToggle/DarkModeToggle'

function App() {

  const [ input1Amount, setInput1Amount ] = useState();
  const [ input2Amount, setInput2Amount ] = useState();
  const [ vatValue, setVatValue ] = useState(20)
  
  let val1 = parseFloat(input1Amount)
  let val2 = parseFloat(input2Amount)

   //** NOTE: Ensure that the values you pass around to other calc functions ARE NOT ROUNDED/TRUNCATED...
  //  just return the values as-is. Only round the figures once calc'd and passed into the display components **
  const calcSubTotal = () => {
    if(!val1) return val2
    if(!val2) return val1
    return val1 + val2
  }

  const calcVAT = () => {
  if(vatValue > 100) return 'Please choose a value under 100'
  return (calcSubTotal() * vatValue) * 0.01
  }

  const calcGrandTotal = () => {
    if(vatValue > 100) return null
    return calcSubTotal() + calcVAT()
  }

  const handleInput1Change = e => setInput1Amount(e.target.value)

  const handleInput2Change = e => setInput2Amount(e.target.value)

  const handleVatChange = e => {
    let figure = e.target.value
    if(figure > 100) setVatValue(100)
    if(figure <= 100) setVatValue(figure)
    if(!figure) setVatValue(20)
  }

  const grabVatValue = () => {
  if(!vatValue) return null
  if(vatValue > 100) return 100
  return vatValue
  }

  const logoImgUrl = 'https://i.imgur.com/8Ttgulb.png'

  return (
    <div className="App" id="App">

      <DarkModeToggle />
      
      <img src={logoImgUrl} alt="logoImage" className="logo" id="logo" />

      <div className="border-box">

        <div className="get-started-msg fade-anim">
          Enter some values to get started!
        </div>


        <div className="form-wrapper fade-anim">
          <Form amount1={input1Amount} amount2={input2Amount} changeInput1={handleInput1Change} changeInput2={handleInput2Change} />
        </div>

        {(input1Amount || input2Amount) ? 
          <div className="outputs-wrapper fade-anim">

            <OutputField type={'Total'} amount={calcSubTotal()} />

            <OutputField type={'VAT'} amount={calcVAT()} vatValue={grabVatValue()} handleVatChange={handleVatChange} /> 

            <OutputField type={'Grand Total'} amount={calcGrandTotal()} />

          </div>
        
        : null }

      </div>

      <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"></link>

    </div>
  );
}

export default App;
