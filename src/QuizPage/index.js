import { useEffect, useState } from "react"
import './index.scss'

export default function QuizPage({ quizData }) {

    const [updatequestion, setUptateQuestionButton] = useState(false)
    const [updateCorrectAnswer, setUpdateCorrectAnswer] = useState()
    const [upateSelectOption, setUpateSelectOption] = useState()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {

        shuffleOptions()
        currectAnswer()

    }, [quizData, questionIndex])

    const shuffleOptions = () => {
        setOptions(quizData && ([
            quizData[questionIndex].correct_answer,
            ...quizData[questionIndex].incorrect_answers

        ].sort(() => { return (Math.random() - 0.5) })));
    }

    const currectAnswer = () => {
        setUpdateCorrectAnswer(quizData && quizData[questionIndex].correct_answer);
    }

    const nextQuestion = () => {

        if (questionIndex < 9  && upateSelectOption) {
            setQuestionIndex(questionIndex + 1)
            setUptateQuestionButton(true)

            if (upateSelectOption === updateCorrectAnswer) {
                setScore(score + 1)
                setUpdateCorrectAnswer('')
                setUpateSelectOption('')
            }
        }
    }

    const previousQuestion = () => {

        if (questionIndex >= 1 ) {
            setQuestionIndex(questionIndex - 1)
            setUpateSelectOption('')

            if (questionIndex === 1) {
                setUptateQuestionButton(false)
            }
        }
        if (upateSelectOption === updateCorrectAnswer) {
            setScore(score - 1)
            setUpdateCorrectAnswer('')
            setUpateSelectOption('')
        }

    }

    const selectOption = (options, index) => {
        setUpateSelectOption(options)
    }


    return (
        <div className="quiz-container">

            {
                quizData ?
                    <div className="quiz-container-items">

                        <h1 className="quiz-container-question">
                            {(questionIndex + 1)}-{
                                (quizData[questionIndex].question)}
                        </h1>

                        <div className="quiz-container-option-items">
                            {
                                options && options.map((options, index) => {
                                    return (
                                        <ul key={index}>
                                            <li onClick={() => selectOption(options, index)} className="quiz-container-option">{options} </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>

                        <div className="quiz-container-buttons">
                            {updatequestion && <button
                                onClick={previousQuestion} className="quiz-container-previous-button">Previous
                            </button>}
                            <button
                                onClick={nextQuestion} className="quiz-container-next-button">Next
                            </button>
                        </div>
                    </div>

                    : <div>...loading</div>
            }

        </div>
    )
}