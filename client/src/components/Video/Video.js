import React,{useEffect,useRef} from 'react'
import Clouds from '../../assets/videos/Clouds.mp4'
import AppWrap from '../../Wrapper/AppWrap'
import PopUpQuestions from '../Video/PopUpQuestions/PopUpQuestions'
const Video = () => {
  const videoRef = useRef(null);

    const StartTimer = () =>{
      setTimeout(() => {
        // after 10 sec stop video 
        videoRef.current.pause();
      }, 10000);
    }
  return (
    <div id="Video">
        <h1>סרטון עם שאלות קופצות</h1>
        <video ref={videoRef} width="700" height="500" controls src={Clouds} onPlay={StartTimer}/>
    </div>
  
  )
}

export default AppWrap(Video)