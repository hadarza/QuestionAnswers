import React,{useEffect} from 'react'
import Clouds from '../../assets/videos/Clouds.mp4'
import AppWrap from '../../Wrapper/AppWrap'

const Video = () => {
    useEffect(() => {
     setTimeout(() => {
        // after 10 sec stop video 
     }, 10000);
    }, [])
    
  return (
    <div id="Video">
        <h1>סרטון עם שאלות קופצות</h1>
        <video width="700" height="500" controls src={Clouds}/>
    </div>
  
  )
}

export default AppWrap(Video)