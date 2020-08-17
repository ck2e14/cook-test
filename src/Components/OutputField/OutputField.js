import React from 'react'
import './OutputField-style.css'

const OutputField = props => {

   const {type, amount, vatValue} = props

   const adjAmount = (Math.round(amount * 100) / 100).toLocaleString(undefined,
      {'minimumFractionDigits':2,'maximumFractionDigits':2});

   return(
      <div className="output-wrapper">

         {(type === 'Total' || 'Grand Total') && 'Rounded '} 

         {type}: £{adjAmount} <span>{vatValue && `(${vatValue}%)` }&nbsp;&nbsp;</span> 
         
         {type === 'VAT' && <input type="number" max={100} className="vat-selector" placeholder={'Set VAT%'} onChange={props.handleVatChange} />}

      </div>
   )
}

export default OutputField;