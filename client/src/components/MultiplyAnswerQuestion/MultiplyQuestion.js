import React from 'react'
import AppWrap from '../../Wrapper/AppWrap'
import MultiplyAnswer from '../Answers/MultiplyAnswer'
const MultiplyQuestion = () => {
  return (
    <div id="AmericanQuestions">
        <MultiplyAnswer/>
    </div>
  )
}

export default AppWrap(MultiplyQuestion)