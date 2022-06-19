import React from 'react'
import Questions from '../../../AnswersQuestion.json'
import QuestionAnswerContainer from '../../Question/QuestionAnswerContainer'

const PopUpQuestions = () => {
  return (
    <div>
        <QuestionAnswerContainer Questions={Questions}/>

    </div>
  )
}

export default PopUpQuestions