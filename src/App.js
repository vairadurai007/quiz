import QuizMainPage from './QuizHomePage/index';
import QuizPage from './QuizPage/index';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css';



function App() {

  const [quizData, setQuizData] = useState(null)

  useEffect(() => {
    FetchQuizData()
  }, [])

  const FetchQuizData = async () => {
    const value = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple')
    setQuizData(value.data.results)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<QuizMainPage />} />
        <Route path='/quiz-page'
          element={<QuizPage
            quizData={quizData}
          />} />
      </Routes>
    </div>
  );
}

export default App;
