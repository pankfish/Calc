import React from 'react';
import NumberButton from '../numberButton'
import './input.css'

 



export function Input(props){
  
 
  
    return (
      <div className="form-div">

        <form className="formStyle">
          <div className="inputFields">

       {/* input for feet */}
            <label className="labelStyle">Feet</label>
            <input 
            id="feet"
            value={props.footVal} 
            className="inputVal"
              onChange={props.handleFeet} 
              autoFocus 
              onClick={props.handleInputChange}>
            </input>

      { /* input for inches */}
            <label className="labelStyle">inches</label>
            <input
                id="inches"
               value={props.inchVal}
              onChange={props.handleInches}
              className="inputVal"
              onClick={props.handleInputChange}>
                

            </input> 
            {// input for fractions
            }
            <label htmlFor="" 
              className="labelStyle">Fr</label>
            <input 
             id="numerator"
             value={props.numeVal}
             onChange={props.handleChangeNume} />
            <input 
            id="denumerator"
             value={props.denuVal}
             onChange={props.handleChangeDenu}/>
          </div>
        </form>

        {/* input buttons */}
        <div className="buttons">
         <ul className="inputButtons">
            <li onClick={props.onAdd}
              className="btn">+</li>
            <li className="btn" 
              onClick={props.onSubtract}>-</li>
            <li className="btn" 
              onClick={props.onEqual}>=</li>
          <li className="btn" 
              onClick={props.onClear}>AC</li>
          </ul>
          <ul className="ftIn"onClick={props.handleInputChange}>
          <li className ="inputVal btn"  id="ft"
       >ft</li>
        <li className ="inputVal btn" id="in"
       >in</li>
       <li className="inputVal btn" id="nume">Nume</li>
       <li className="inputVal btn" id="denu">Denu</li>
       
          </ul>
       
        </div>
         
       <NumberButton
        handleClick={props.handleClick} 
        handleInputChange={props.handleInputChange}/>
      </div>
    )
  
}


export default Input
