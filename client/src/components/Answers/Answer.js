import { useState,useRef } from 'react'
import { BiCheck } from 'react-icons/bi'
import {RiCloseFill} from 'react-icons/ri'
import { useSelector } from 'react-redux';
import { getSelectAnswer, getShowAnswer } from '../../Redux/features/Questions/QuestionSlice';
const Answer = ({textAns,rightAns,currentAnswer,funcOnClick,disabled}) => {

  const buttonRef = useRef(null);
  const showAns = useSelector(getShowAnswer)
  const isCorrect = useSelector(getSelectAnswer)

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
      {/* Show correct Answer only at clicking the correct Ans */}      
      {(rightAns != isCorrect && showAns &&  currentAnswer != rightAns) && <RiCloseFill color='white'  fontSize={20} className='icon-Ans icon-Ans-X'/> }
      {(rightAns == isCorrect  && showAns && currentAnswer == rightAns ) && <BiCheck color='white' fontSize={20} className='icon-Ans icon-Ans-V'/> }

      <p className='ans-text'>{textAns}</p>

    </button>
  )
}

export default Answer