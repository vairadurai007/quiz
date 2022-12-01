import { useEffect, useState } from "react"
import './index.scss'
import axios from "axios"

export default function QuizPage() {

    const [quizData, setQuizData] = useState(null)
    const [questionindex, setQuestionIndex] = useState(0)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState()

    useEffect(() => {

        FetchQuizData()

    }, [])
    
    console.log();

    async function FetchQuizData() {
        await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple')
            .then((responce) => {
                return (
                    setQuizData(responce.data.results)
                )
            })
            .catch(error => { setError(error) })
    }

    const nextQuestion = () => {
        setQuestionIndex(questionindex + 1)
    }

    if (questionindex === 20) {
        alert('Finished')
    }

    return (
        <div className="quiz-container">

            {
                quizData ?

                    <div className="quiz-container-flex">
                        <h1 className="quiz-container-question">
                            {(questionindex + 1)}-{quizData[questionindex].question}
                        </h1>
                        <div className="quiz-container-option">

                            {
                                (quizData[questionindex].incorrect_answers).map((options, index) => {

                                    return (

                                        <ul key={index} className="quiz-container-ul">
                                            <li onClick={nextQuestion} className="quiz-container-li">{options}</li>

                                        </ul>

                                    )
                                })

                            }

                            <li onClick={nextQuestion} className="quiz-container-li">{quizData[questionindex].correct_answer}</li>
                        </div>
                    </div>

                    : <div>...loading</div>
            }

        </div>
    )
}