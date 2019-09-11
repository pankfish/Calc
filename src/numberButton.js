import React from 'react'


const NumberButton = (props) => {
  return (
    <div className="number-button">
      <ul onClick={props.handleClick}>
        <li className="number" value="1">1</li>
        <li className="number" value="2">2</li>
        <li className="number" value="3">3</li>
        <li className="number" value="4">4</li>
        <li className="number" value="5">5</li>
        <li className="number" value="6">6</li>
        <li className="number" value="7">7</li>
        <li className="number" value="8">8</li>
        <li className="number" value="9">9</li>
        
        <li className="number" value="0">0</li>
        
       
        
        
      </ul>

      
    </div>
  )
}

export default NumberButton
