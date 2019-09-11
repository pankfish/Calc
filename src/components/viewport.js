import React from 'react'
import Answer from './answer'


export const Viewport = (props) => {
    
    return (
      <div className="viewport" >
       
        <ul className="plus">

          {props.outputArray.map(obj=> {
            if(obj.nume > 0){
              return <li key={Math.random()*500}> + {obj.feet}'{obj.inches}" {obj.nume} / {obj.denu}
                </li>
            }else{
              return <li key={Math.random()*500}> + {obj.feet}'{obj.inches}" 
              </li>
            }
    
  })}
        </ul>
       <ul className="minus">

       {props.minusOutputArray.map(obj=> {
         if(obj.nume > 0){
          return <li key={Math.random()*500} style={{color: '#d63031', listStyle: 'none'}}> - {obj.feet}'{obj.inches}" {obj.nume} / {obj.denu}</li>
         }else{
          return <li key={Math.random()*500} style={{color: '#d63031', listStyle: 'none'}}> - {obj.feet}'{obj.inches}" </li>
         }
   
  })}
       </ul>
      
        <Answer answer={props.answer}/>
     
      
      </div>

    )
  
}


export default Viewport
