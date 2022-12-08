import './Sass/index.scss'

function QuizReview(props) {

const {quizData,correctOption,isCheaked}=props;

console.log(quizData);
console.log(correctOption);

    return (
        <div className='review-container'>
            {
                isCheaked ?
                <div>hi</div>
                :<div>No Data Found</div>
            }
        </div>
    )
}


export default QuizReview