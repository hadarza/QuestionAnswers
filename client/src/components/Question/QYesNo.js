import React,{useState,useEffect} from 'react'
import Answer from '../../Answers/Answer'
import AppWrap from '../../Wrapper/AppWrap'
import { useSelector,useDispatch } from 'react-redux';
import { getSelectAnswer, setSelectAnswer, setShowAnswer } from '../../Redux/features/Questions/QuestionSlice';
import Questions from '../../AnswersQuestion.json'
const QYesNo = () => {
    const [showAns, setshowAnswer] = useState(false)
    const [isDisabled, setDisabled] = useState(false);
    const [CantCheck,setCantCheck] = useState(true)
    const [indexQuestion,setindexQuestion] = useState(0);
    const MaxQuestions = 3;
    const dispatch = useDispatch();

    const [currentAnswer, setcurrentAnswer] = useState("")
    const setAns = (currentAns)=>{
        setcurrentAnswer(currentAns)
        dispatch(setSelectAnswer(currentAns))
        setCantCheck(false);
    }
    // check if the user is correct
    const checkAns = ()=>{
      setshowAnswer(true)
      dispatch(setShowAnswer(true))
      //make all buttons to be disabled
      setDisabled(true);
      setCantCheck(true);
    }

    const NextQuestion = () =>{
      // disable to check answer
      setshowAnswer(false)
      setDisabled(false);
      setCantCheck(true);
      dispatch(setShowAnswer(false))
      setindexQuestion(indexQuestion+1);

      const AllAnswers = Array.from(document.querySelectorAll('.Answer'));
      //hide selected Answer
      AllAnswers.forEach(element => {
        if(element.classList.contains("select")) element.classList.remove('select'); 
      });
    }
  return (
    <div id="YesNo" className='Question Question-yesNo'>
      {Questions.slice(indexQuestion,indexQuestion+1).map((question)=>(
        <>
          <h1>{question.title}</h1>
          <div className='Answers-section'>
            {Questions[indexQuestion].Answers.map((answer)=>(
              <Answer textAns={answer} rightAns = {question.correctAns} currentAnswer={answer} funcOnClick={setAns} disabled={isDisabled}/>
            ))}
        </div>
        </>
      ))}

        <button className='button-return check-btn' onClick={checkAns} disabled={CantCheck}>בדוק שאלה</button>
        {(indexQuestion < MaxQuestions - 1 && showAns) && <button className='button-return next-btn' onClick={NextQuestion}>עבור לשאלה הבאה</button>}
            
    </div>
  )
}

export default AppWrap(QYesNo)