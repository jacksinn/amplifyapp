import React from 'react'
import Question from './Question'

// type UserAnswers = [
//     {
//         questionId: number,
//         answer: string
//     }
// ]
const Questionnaire = () => {
    const firstQuestion = 1;
    const [currentQuestion, setCurrentQuestion] = React.useState(firstQuestion);
    const [userAnswers, setUserAnswers] = React.useState([]); // type UserAnswers = [
    const [allowSubmit, setAllowSubmit] = React.useState(false);

    const displayQuestion = (questionId) => {
        setCurrentQuestion(questionId);
    }

    const questions = [
        {
            id: 1,
            text: 'What is the capital of France?',
            helpText: 'Rate: 1 (very bad) - 10 (very good)',
            options: {
                type: 'radio',
                values: [
                    'Paris',
                    'New York',
                    'Dublin'
                ]
            },
            nextQuestion: 2,
            previousQuestion: null
        },
        {
            id: 2,
            text: 'Who is CEO of Tesla?',
            helpText: 'Rate: 1 (strongly disagree) - 10 (strongly agree)',
            options: {
                type: 'radio',
                values: [
                    'Jeff Bezos',
                    'Elon Musk',
                    'Bill Gates'
                ]
            },
            nextQuestion: 3,
            previousQuestion: 1
        },
        {
            id: 3,
            text: 'The iPhone was created by which company?',
            options: {
                type: 'radio',
                values: [
                    'Apple',
                    'Intel',
                    'Amazon'
                ]
            },
            nextQuestion: 4,
            previousQuestion: 2
        },
        {
            id: 4,
            text: 'How many Harry Potter books are there?',
            options: {
                type: 'radio',
                values: [
                    '1',
                    '4',
                    '6',
                    '7'
                ]
            },
            nextQuestion: null,
            previousQuestion: 3
        },
      ];

    const handleNextClick = () => {
        setAllowSubmit(false)
        const nextQuestion = questions.find(question => question.id === currentQuestion).nextQuestion;
        setCurrentQuestion(nextQuestion);
    }

    const handlePreviousClick = () => {
        setAllowSubmit(false)
        const nextQuestion = questions.find(question => question.id === currentQuestion).previousQuestion;
        setCurrentQuestion(nextQuestion);
    }

    const question = questions.find(question => question.id === currentQuestion);


    const showPreviousButton = () => {
        // console.log(questions[currentQuestion])
        // console.log(questions[currentQuestion].previousQuestion)
        // console.log(questions[currentQuestion].nextQuestion)
        if (question.previousQuestion !== null) {
            return (
                <button onClick={handlePreviousClick}>Previous</button>
            )
        }
    }

    const showNextButton = () => {
        if (question.nextQuestion !== null) {
            return (
              <button onClick={handleNextClick}>Next</button>
            )
        }
    }

    const setSubmit = () => {
        setAllowSubmit(true)
    }

    // questions.map((question) => (
    //   console.log(question)
    // ))

  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {questions.map(question => (
          <Question key={question.id} setSubmit={setSubmit} question={question} hide={question.id !== currentQuestion}/>
        ))}
      </ul>
        <button disabled={!allowSubmit}>Submit</button>
        {showPreviousButton()}
        {showNextButton()}
    </div>
  )
}

export default Questionnaire