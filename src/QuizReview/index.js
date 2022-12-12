import './Sass/index.scss'
import he from 'he'
import { useNavigate } from 'react-router-dom';

function QuizReview(props) {

    const { quizData, correctOption, isChecked } = props;
    const navigate = useNavigate()

    return (
        <div className='review-container'>
            {
                isChecked ?
                    <div className='review-container-items'>
                        <h1 className='review-container-heading'>Questions Review</h1>
                        {
                            quizData.map((correctAnswer, index) => {
                                return (
                                    <ol className='review-container-list-items'
                                        key={correctAnswer.correct_answer}>
                                        <li className='review-container-question'>
                                            {index + 1}-{he.decode(correctAnswer.question)}
                                        </li>

                                        <li className='review-container-correct-answer'>
                                            {correctAnswer.correct_answer}
                                        </li>

                                        {correctOption.map((selectOption) => {
                                            return (
                                                <li className='review-container-select-option'
                                                    key={index}>{selectOption[index]}
                                                </li>
                                            )
                                        })}
                                    </ol>
                                )
                            })
                        }
                        <button
                            onClick={() => { navigate('/score') }}
                            className='review-container-back-option'>
                            Goback
                        </button>
                    </div>
                    :
                    <div className='review-sub-container'>No Data Found</div>
            }
        </div>
    )
}


export default QuizReview