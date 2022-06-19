import React from 'react'

const MultiplyAnswer = () => {
  return (
    <button className='MultiplyAnswer' onClick={()=>{
       // SelectAns();
      }}>
        {/* Show correct Answer only at clicking the correct Ans */}      
  
        <p className='ans-text'>תשובה א</p>
  
      </button>  )
}

export default MultiplyAnswer