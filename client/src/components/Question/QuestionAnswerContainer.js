import React,{useState} from 'react'
import Answer from '../Answers/Answer'
import { useSelector,useDispatch } from 'react-redux';
import { getindexQuestion,getDisabled,setCantCheck,setSelectAnswer, getSelectAnswer} from '../../Redux/features/Questions/QuestionSlice';

const QuestionAnswerContainer = ({Questions}) => {
    const dispatch = useDispatch();
    const indexQuestion = useSelector(getindexQuestion);
    const isDisabled = useSelector(getDisabled)

    const setAns = (currentAns)=>{
        dispatch(setSelectAnswer(currentAns))
        dispatch(setCantCheck(false));
    }
  return (
    <>
    {Questions.slice(indexQuestion,indexQuestion+1).map((question)=>(
        <div className='div-absolute'>
          <h1>{question.title}</h1>
          <div className='Answers-section'>
            {Questions[indexQuestion].Answers.map((answer)=>(
              <Answer textAns={answer} rightAns = {question.correctAns} currentAnswer={answer} funcOnClick={(answer)=>{setAns(answer)}} disabled={isDisabled}/>
            ))}
        </div>
        </div>
      ))}
    </>

    )
    
}

export default QuestionAnswerContainer