import React from 'react'
import "../scss/app.scss"
import HebetNavBar from '../HebetNavBar/HebetNavBar'
const AppWrap = (Component, idName,Question) => function HOC() {
  return (
    <div id={idName} className={`app__wrapper`}>
      <div className='card-Question'>
        <HebetNavBar title={Question}/>
        <Component/>
      </div>
    </div>
  )
}

export default AppWrap