import React,{useState} from 'react'
import {images} from '../../constants/index'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'
import AppWrap from '../../Wrapper/AppWrap'
import Testmonials from '../../JSON/Testmonials.json'
const Card = () => {
    const TestmonialsLength = 3;
    const [currentIndex, setcurrentIndex] = useState(0)
    const handleClick= (index) =>{
      setcurrentIndex(index);
    }
  return (
   <div id="Card">
   <h1>חוות דעת</h1>
   {Testmonials.slice(currentIndex,currentIndex+1).map((testmonial)=>(
    <>
     <div className='app__testmonial-item'>
     <img src={images.logo} alt="imageLogo"/>
        <div className='app__testmonial-content'>
            <p className='bold-text feedback'>{testmonial.feedback}</p>
        <div>
            <h4 className='bold-text'>{testmonial.unit}</h4>
            <h5 className='p-text'>{testmonial.name}</h5>
        </div>
     </div>
    </div> 

     <div className="app__testmonial-btns">
        <div className='flex' onClick={()=>{handleClick(currentIndex === TestmonialsLength - 1  ? 0 : currentIndex + 1)}}>
            <HiChevronRight/>  
        </div>
        <div className='flex' onClick={()=>{handleClick(currentIndex === 0 ? TestmonialsLength -1 : currentIndex -1)}}>
            <HiChevronLeft/>  
        </div>  
     </div>
     </>
   ))}
    </div>
  )
}

export default AppWrap(Card)