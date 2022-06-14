import { useState,useRef } from 'react'
import { BiCheck } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { getShowAnswer } from '../Redux/features/Questions/QuestionSlice';
const Answer = ({textAns,rightAns,currentAnswer,funcOnClick,disabled}) => {

  const buttonRef = useRef(null);
  const showAns = useSelector(getShowAnswer)
  
  const SelectAns = ()=>{
    const selectAnswer = buttonRef.current; // corresponding DOM node

      //foreach on all objects with Answer class and remove select class if exist
      const AllAnswers = Array.from(document.querySelectorAll('.Answer'));

      AllAnswers.forEach(element => {
        if(element.classList.contains("select")) element.classList.remove('select'); 
      });

      // set select class to the new select answer
      selectAnswer.classList.add('select');
      funcOnClick(currentAnswer);
  }
  return (
    <button className='Answer' ref={buttonRef} disabled={disabled} onClick={()=>{
      SelectAns();
    }}>
        {(rightAns == currentAnswer && showAns) && <BiCheck color='purple' fontSize={45} className='rightAns'/> }
        {(rightAns != currentAnswer && showAns) && <BiCheck color='white' className='rightAns'/> }
        <p className='ans-text'>{textAns}</p>

    </button>
  )
}

export default Answer