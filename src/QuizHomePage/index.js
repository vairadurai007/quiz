import { useNavigate } from 'react-router-dom'
import './MainSass/_index.scss'
import { useState } from "react"

export default function QuizMainPage() {

    const navigate = useNavigate();

    const passQuestionAmount = () => {
        navigate('/quiz-page')
    }

    return (
        <div>
            <div className='container' >

                <header>
                    <p className='logo'><span className='logo-letter'>Q</span>UIZ</p>
                    <div className='navigation'>
                        <ul className='navigation-list'>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </header>

                <div className='banner'>
                    <div className="sports-quote">
                        <h1 className='sports-quote-heading'>Inspirational  <span className='sports-quote-span'>sports</span> quote</h1>
                        <p className='sports-quote-lines'>There is always going to be a reason why you can’t do something; your job is to constantly look for the reasons why you can achieve your dreams
                        </p>
                    </div>
                    <button onClick={passQuestionAmount} className='sports-quote-btn'>Get Started</button>
                </div>

            </div>
        </div>
    )
}