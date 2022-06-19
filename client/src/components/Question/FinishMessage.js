import React,{useRef,useEffect,useState} from 'react'
import {images} from '../../constants/index'
import { useDispatch } from 'react-redux';
import {setShowAnswer,getindexQuestion,setindexQuestion, setDisabled,setvisibleFeedback } from '../../Redux/features/Questions/QuestionSlice';

const FinishMessage = ({title,visible}) => {
    const [selectedFeedback, setselectedFeedback] = useState("")
    const divRef = useRef(null);
    const iconRef = useRef(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
      if(visible)
        divRef.current.style.visibility = 'visible';
    else divRef.current.style.visibility = 'hidden';    
    },[visible])

    const setAsSelected = (e)=>{
        // set all the other to be visibility 0.3 and the selected visibility 1
        const AllAnswers = Array.from(document.querySelectorAll('.icon-img'));
      AllAnswers.forEach(element => {
        if(element.classList.contains("visibleAll")){
          element.classList.remove("visibleAll")
          element.classList.add("HalfVisible")
        }});

        if(e.currentTarget.classList.contains("HalfVisible")){
            e.currentTarget.classList.remove("HalfVisible")
            e.currentTarget.classList.add("visibleAll")
        }
    }
    

    const tryAgain = ()=>{
        dispatch(setShowAnswer(false))
        dispatch(setindexQuestion(0));
        dispatch(setDisabled(false));
        const AllAnswers = Array.from(document.querySelectorAll('.Answer'));
        //hide selected Answer
        AllAnswers.forEach(element => {
          if(element.classList.contains("select")) element.classList.remove('select'); 
        });
        // hide this component
        dispatch(setvisibleFeedback(false));
    }
const arrayOfImg = [
    {
        "icon":images.sad,
        "title":"sad"
    },
    {
        "icon": images.confused,
        "title":"confused"
    },
    {
        "icon": images.happy,
        "title":"happy"
    }, {
        "icon": images.smile,
        "title":"smile"
    }
    , {
        "icon": images.star,
        "title":"star"
    }]
  return (
    <div className='feedback-container' ref={divRef} >
        <h2>{title}</h2>
        <div className='feedback-div'>
            <div className='emotions-div'>
                {arrayOfImg.map((object,key)=>(
                    <div className='emotion'>
                    {object.title}
                    <img className='icon-img HalfVisible' ref={iconRef} src={object.icon} onClick={
                        (e)=>{setAsSelected(e); 
                        setselectedFeedback(object.title);
                    }
                    }/>
                </div>
            ))}
            </div>
            <button className='button-return btn-feedback' onClick={tryAgain}>נסה שוב?</button>
        </div>
    </div>
  )
}

export default FinishMessage