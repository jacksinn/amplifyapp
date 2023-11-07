import React from 'react'
import './Question.scss'

const Question = ({ question, hide, setSubmit }) => {
  const { text, options } = question
  const values = options.values

  const hideClass = hide ? 'hide' : ''

  const answerDisplay = () => {
    if (options.type === 'radio') {
      return (
        <div>
          {values.map((option) => (
            <div key={option}>
              <input type='radio' name={question.id} id={option} value={option} onClick={setSubmit} />
              <label for={option}>{option}</label>
            </div>
          ))}
        </div>
      )
    } else if (options.type === 'text') {
      return (
        <input type='text' />
      )
    }
  }

  return (
    <div className={hideClass}>
      <h2>{text}</h2>
      {answerDisplay()}
    </div>
  )
}

export default Question