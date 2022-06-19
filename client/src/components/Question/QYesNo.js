import React,{useState} from 'react'
import AppWrap from '../../Wrapper/AppWrap'
import { useSelector,useDispatch } from 'react-redux';
import {getShowAnswer, setShowAnswer,getindexQuestion,setindexQuestion,setDisabled,setCantCheck, getvisibleFeedback,setvisibleFeedback, getCantCheck} from '../../Redux/features/Questions/QuestionSlice';
import Questions from '../../AnswersQuestion.json'
import FinishMessage from './FinishMessage';
import QuestionAnswerContainer from '../../components/Question/QuestionAnswerContainer'

const QYesNo = () => {
    const CantCheck = useSelector(getCantCheck)
    const visibleFeedback = useSelector(getvisibleFeedback) //FIX HERE NOT EXIST 
    const MaxQuestions = 3;
    const dispatch = useDispatch();
    const showAns = useSelector(getShowAnswer)
    const indexQuestion = useSelector(getindexQuestion);

    // check if the user is correct
    const checkAns = ()=>{
      //make all buttons to be disabled
      dispatch(setDisabled(true));
      dispatch(setCantCheck(true));
      dispatch(setShowAnswer(true))
    }
    const Finish = (e)=>{
        // if true - visible feedback
        dispatch(setvisibleFeedback(true));
        //check disabled btn???
        if(e.currentTarget != null)
          e.currentTarget.style.disabled = true;
        const AllAnswers = Array.from(document.querySelectorAll('.icon-img'));
        AllAnswers.forEach(element => {
          if(element.classList.contains("visibleAll")){
           console.log(element)
            element.classList.remove("visibleAll");
            element.classList.add("HalfVisible");
          }});
   
    }

    const NextQuestion = () =>{
      // disable to check answer
      dispatch(setDisabled(false));
      dispatch(setCantCheck(true));
      dispatch(setShowAnswer(false))
      dispatch(setindexQuestion(indexQuestion+1));

      const AllAnswers = Array.from(document.querySelectorAll('.Answer'));
      //hide selected Answer
      AllAnswers.forEach(element => {
        if(element.classList.contains("select")) element.classList.remove('select'); 
      });
    }
    
  return (
    <div id="YesNo" className='Question Question-yesNo'>
        <QuestionAnswerContainer Questions={Questions}/>
        <FinishMessage title ="איך היו השאלות? נהנת?" visible={visibleFeedback}/> 
        <button className='button-return check-btn' onClick={checkAns} disabled={CantCheck}>בדוק שאלה</button>
        {(indexQuestion < MaxQuestions - 1 && showAns) && <button className='button-return next-btn' onClick={NextQuestion}>עבור לשאלה הבאה</button>}
        {(indexQuestion == MaxQuestions - 1 && showAns) && <button className='button-return next-btn' disabled={false} onClick={(e)=>{Finish(e)}}>לסיום</button>}
    </div>
  )
}

export default AppWrap(QYesNo)