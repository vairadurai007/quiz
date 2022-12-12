import { useState, useEffect } from "react"
import './index.scss'
import he from 'he'
import { useNavigate } from "react-router-dom";

export default function QuizPage(props) {

    const { quizData } = props;
    const navigate = useNavigate()
    const [isPreviousQuestion, setIsPreviousQuestion] = useState(false)
    const [submitedAnswer, setSubmitedAnswer] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const [correctOption, setCorrectOption] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)
    const [Options, setOptions] = useState([])
    const [score, setScore] = useState([])

    useEffect(() => {
        setOptions(!!quizData && [quizData[questionIndex].correct_answer,
        ...quizData[questionIndex].incorrect_answers
        ].sort(() => { return (Math.random() - 0.5) }))

        setCorrectAnswer(!!quizData && quizData[questionIndex].correct_answer);

    }, [quizData, questionIndex, correctAnswer])

    const handleNextQuestion = () => {

        if (questionIndex < (quizData.length - 1) && isSelected) {
            setQuestionIndex(questionIndex + 1)
            setIsPreviousQuestion(true)
            setIsSelected(false)
        }

        if (questionIndex === (quizData.length - 2)) {
            setSubmitedAnswer(true)
        }

        if (selectedOption === correctAnswer) {
            score.splice(questionIndex, 1, 1)
            correctOption.splice(questionIndex, 1, '')
        }
        else {
            score.splice(questionIndex, 1, 0)
            correctOption.splice(questionIndex, 1, selectedOption)
        }
    }

    const handlePreviousQuestion = () => {

        if (questionIndex >= 1) {
            setQuestionIndex(questionIndex - 1)
            setIsSelected(false)
        }
        if (quizData.length - 1) {
            setSubmitedAnswer(false)
        }
        if (questionIndex === ((quizData.length) - (quizData.length - 1))) {
            setIsPreviousQuestion(false)
        }
    }

    const questionOptions = (options) => {
        setSelectedOption(options)
        setIsSelected(true)
    }

    const handleSubmit = () => {

        if (selectedOption === correctAnswer) {
            score.splice(questionIndex, 1, 1)
            correctOption.splice(questionIndex, 1, '')
        }
        else {
            score.splice(questionIndex, 1, 0)
            correctOption.splice(questionIndex, 1, selectedOption)
        }

        const quizScore = score.reduce((a, b) => (a + b))
        props.submitScore(quizScore)
        props.selectedOption(correctOption)
        props.updateQuizData(true)
        setScore('')
        setCorrectOption('')
        navigate('/score')
        localStorage.setItem('quizScore', JSON.stringify(quizScore))
    }

    return (
        <div className="quiz-container">
            {
                !!quizData ?
                    <div className="quiz-container-items">

                        <h1 className="quiz-container-question">
                            {(questionIndex + 1)}-{
                                he.decode(quizData[questionIndex].question)}
                        </h1>

                        <div className="quiz-container-option-items">
                            {
                                !!Options && Options.map((options, index) => {
                                    return (
                                        <ul key={index}>
                                            <button onClick={() => questionOptions(options)}
                                                    className="quiz-container-option">{options}
                                            </button>
                                        </ul>
                                    )
                                })
                            }
                        </div>

                        <div className="quiz-container-buttons">
                            {isPreviousQuestion &&
                                <button
                                    onClick={handlePreviousQuestion}
                                    className='quiz-container-next-button'
                                >
                                    Previous
                                </button>
                            }

                            {submitedAnswer ?
                                <button
                                    onClick={handleSubmit}
                                    className={`quiz-container-${isSelected ? 'next-button' : 'false-button'}`}
                                >
                                    Submit
                                </button>
                                :
                                <button
                                    onClick={handleNextQuestion}
                                    className={`quiz-container-${isSelected ? 'next-button' : 'false-button'}`}
                                >
                                    Next
                                </button>
                            }
                        </div>
                    </div>
                    :
                    <div className="quiz-container-loading">Loading...</div>

            }

        </div>
    )
}