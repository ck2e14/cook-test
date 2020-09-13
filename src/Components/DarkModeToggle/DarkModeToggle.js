import React, {useState} from 'react'
import './DarkModeToggle-style.css'

const DarkModeToggle = () => {

   // const [ classNames, setClassNames ] = useState(["toggle"])
   const [ toggle, setToggle ] = useState('')

   const toggleMode = () => {
      const appElem = document.getElementById('App')
      // const toggleTextElem = document.getElementById('toggle-option-text')

      if(toggle === "") {
         setToggle('active')
         appElem.classList.add('night')
      }
      if(toggle === "active"){
         setToggle("")
         appElem.classList.remove('night')
      } 
   }

   return(
      <>
         <div className={'toggle '+ toggle} onClick={toggleMode} ></div>
         {toggle === 'active' ? 
            <div id="toggle-option-text" style={{color: 'white'}}>Night Mode</div> 
         : 
            <div id="toggle-option-text" style={{color: 'black'}}>Light Mode</div>}
      </>
   )
}

export default DarkModeToggle