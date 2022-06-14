import React,{useState,useEffect} from 'react'
import Answer from '../Answers/Answer'
import AppWrap from '../Wrapper/AppWrap'
import { useSelector,useDispatch } from 'react-redux';
import { getSelectAnswer, setSelectAnswer, setShowAnswer } from '../Redux/features/Questions/QuestionSlice';

const QYesNo = () => {
    const [showAns, setshowAnswer] = useState(false)
    const [isDisabled, setDisabled] = useState(false);
    const [CantCheck,setCantCheck] = useState(true)
    const rightAnswerNew =[2001,1000,1000,88,88];
    const indexQuestion = 0;
    
    const selectAns = useSelector(getSelectAnswer)
    const dispatch = useDispatch();

    const [currentAnswer, setcurrentAnswer] = useState("")
    const setAns = (currentAns)=>{
        setcurrentAnswer(currentAns)
        dispatch(setSelectAnswer(currentAns))
        setCantCheck(false);
    }
    const checkAns = ()=>{
      setshowAnswer(true)
      dispatch(setShowAnswer(true))
      //make all buttons to be disabled
      setDisabled(true);
      setCantCheck(true);

    }
  return (
    <div className='Question Question-yesNo'>
        <h1>?באיזה שנה נוסדה יחידת הבט</h1>
        <div className='Answers-section'>
            <Answer textAns="2005" rightAns = {rightAnswerNew[indexQuestion]} currentAnswer="2005" funcOnClick={setAns} disabled={isDisabled}/>
            <Answer textAns="2001" rightAns = {rightAnswerNew[indexQuestion]} currentAnswer="2001" funcOnClick={setAns} disabled={isDisabled}/>
        </div>
        <button className='button-return check-btn' onClick={checkAns} disabled={CantCheck}>בדוק שאלה</button>
        <button className='button-return next-btn'>עבור לשאלה הבאה</button>
    </div>
  )
}

export default AppWrap(QYesNo,"כמה זמן היחידה קיימת","YesNo")