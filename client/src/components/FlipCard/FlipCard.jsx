import React from 'react'
import AppWrap from '../../Wrapper/AppWrap'
const FlipCard = () => {
  return (
  <>
    <h1 id="FlipCard">דוגמה לקלף</h1>
   <a className="card" href="#!">
    <div className="front">
      <p>זה קלף...  הפוך אותי</p>
    </div>
    <div className="back">
      <div>
        <p>מידע חדש!</p>
        <p>אינפורמציה... לכתוב משהו....</p>
      </div>
    </div></a>
    </>
    )
}

export default AppWrap(FlipCard)