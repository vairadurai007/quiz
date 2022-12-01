import QuizMainPage from './QuizHomePage/index';
import QuizPage from './QuizPage/index';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<QuizMainPage />} />
        <Route path='/quiz-page' element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
