import React from "react";
import "./WelcomeMsg-style.css";

const WelcomeMsg = props => {

   const { closeMsg } = props

   return (
      <div className='welcomeMsg-container'>
         <div className='close-me' onClick={() => closeMsg()}>X</div>
         <div className='welcomeMsg-content'>
            This tool is designed to take either one or two monetary values and return the sub-total, the VAT
            (adjustable, but pre-set at UK's current 20%), and the sub-total plus the VAT. It's a proof of
            concept tool, using robust JavaScript, with an example use-case of determining prices of inventory
            items.
         </div>
      </div>
   );
};

export default WelcomeMsg;
