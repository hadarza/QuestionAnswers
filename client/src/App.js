import './App.css';
import React,{useEffect,useRef,useState} from 'react'
import QYesNo from './components/Question/QYesNo';
import Video from './components/Video/Video';
import NavBarPage from './components/NavBar/NavBarPage'
import Accordion from './components/Accordion/Accordion';
import Card from './components/Cards/Card';
import FlipCard from './components/FlipCard/FlipCard';

function App() {
  

    useEffect(() => {
      // stop video when user scroll and don't look at video
      let video = document.querySelector('video');
      let isPaused = false;
      let observer = new IntersectionObserver((entries, observer) => { 
          entries.forEach(entry => {
          if(entry.intersectionRatio!=1  && !video.paused){
              video.pause();
              isPaused = true;
          }
          else if(isPaused) {
              video.play(); 
              isPaused=false}
          });
      }, {threshold: 1});
      observer.observe(video);
    }); 
  
  return (
    <div className="App">
      <NavBarPage/>
      <QYesNo/>
      <Accordion/>
      <Video/>
      <Card/>
      <FlipCard/>
    </div>
  );
}

export default App;
