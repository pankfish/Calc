import React from 'react'

const Answer = (props) => {
  const { answer } = props
  if(answer){
    return (
      <div className="Answer">
        <h3>
         
         {`Answer = ${answer}`}
         
        
        
          </h3>
        
      </div>
    )
  }else{
    return(
      <div></div>
    )
  }
    
 
}


export default Answer
