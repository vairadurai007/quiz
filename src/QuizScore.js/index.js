import { useNavigate } from 'react-router-dom';
import './mainSass/index.scss'

function QuizScore(props) {

    const { quizScore } = props
    const navigate = useNavigate()
    const previousScore = localStorage.getItem('quizScore')

    const navigateToReview = () => {
        navigate('/review')
    }

    const handleRestart=()=>{
        props.resetCheaked(false)
        navigate('/')
    }

    return (
        <div className='score-container' >
            <h1 className='quiz-previous-score'>Highest Score is <span className='previous-score'>{previousScore}</span></h1>
            <div className='score-container-items'>
                <div className='score-container-current-score'>
                    <h1 className='score-container-quote'>Congratulations</h1>
                    <h2 className='score-container-score'>Your Score is <span className='current-score'>{quizScore}</span>/10</h2>
                </div>

                <div className='score-container-footer'>
                    <button className='score-container-button' onClick={handleRestart}>Restart</button>
                    <button className='score-container-button' onClick={() => { navigate('/') }}>Home</button>
                    <button className='score-container-button' onClick={navigateToReview}>Review</button>
                </div>
            </div>

        </div>
    )
}

export default QuizScore;