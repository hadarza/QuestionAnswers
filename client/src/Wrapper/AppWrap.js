import React from 'react'
import "../scss/app.scss"
import HebetNavBar from '../components/HebetNavBar/HebetNavBar'
const AppWrap = (Component) => function HOC() {
  return (
    <div className="app__wrapper">
      <div className='card-Question'>
{/*        <HebetNavBar title={Question}/>*/}
        <Component/>
      </div>
    </div>
  )
}

export default AppWrap