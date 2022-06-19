import React from 'react'
import Questions from '../../AnswersQuestion.json'
const MultiplyAnswers = () => {
  return (
    <>
    {Questions.slice(indexQuestion,indexQuestion+1).map((question)=>(
        <div className='div-absolute'>
          <h1>{question.title}</h1>
          <div className='Answers-section'>
            {Questions[indexQuestion].Answers.map((answer)=>(
              <Answer textAns={answer} rightAns = {question.correctAns} currentAnswer={answer} funcOnClick={setAns} disabled={isDisabled}/>
            ))}
        </div>
        </div>
      ))}
    </>  )
}

export default MultiplyAnswers