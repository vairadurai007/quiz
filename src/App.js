import QuizMainPage from './QuizHomePage/index';
import QuizPage from './QuizPage/index';
import QuizScore from './QuizScore.js/index'
import QuizReview from './QuizReview/index';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css';

function App() {

  const QuestionAmount = 10;
  const [quizData, setQuizData] = useState(null)
  const [quizScore, setQuizScore] = useState(0)
  const [correctOption, setCorrectOption] = useState([])
  const [isCheacked, setIsCheacked] = useState(false)

  const submitScore = (quizScore) => {
    setQuizScore(quizScore)
  }

  const selectedOption = (selectOption) => {
    setCorrectOption([...correctOption, selectOption])
  }

  const updateQuizData = (isQuizData) => {
    setIsCheacked(isQuizData)
  }

  const resetCheacked = (isCheak) => {
    setIsCheacked(isCheak)
  }

  useEffect(() => {
    FetchQuizData()
  }, [])

  const FetchQuizData = async () => {
    const fetchData = await axios.get(`https://opentdb.com/api.php?amount=${QuestionAmount}&category=21&difficulty=hard&type=multiple`)
    setQuizData(fetchData.data.results)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<QuizMainPage />} />

        <Route
          path='/quiz-page'
          element={
            <QuizPage
              quizData={quizData}
              selectedOption={selectedOption}
              submitScore={submitScore}
              updateQuizData={updateQuizData}
            />
          }
        />

        <Route
          path='/score'
          element={
            <QuizScore
              quizScore={quizScore}
              resetCheacked={resetCheacked}
              QuestionAmount={QuestionAmount}
            />
          }
        />

        <Route
          path='/review'
          element={
            <QuizReview
              correctOption={correctOption}
              quizData={quizData}
              isCheacked={isCheacked}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
