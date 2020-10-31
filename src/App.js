
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Questionare from "./Components/Questionare";
 
library.add( faCheckSquare, faCoffee)


function App() {
  const [response,setResponse]=useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [showAnswer, setShowAnswer] = useState(false);

const apiURL="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
useEffect(()=>{
  fetch(apiURL)
 .then((res)=>res.json()).then((data)=>{
   const res=data.results.map((question)=>({...question,
    answers:[question.correct_answer,...question.incorrect_answers].sort(()=>Math.random()-0.5)
  }));
  setResponse(res);
 });
}, []);

 const handleAnswerOptionClick = (isCorrect) => {

    if (isCorrect) {
        setScore(score + 1); 
    }
        setShowAnswer(true)
    
    
    
  };
  const handleNextQuestionClick = () => {
    setShowAnswer(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < response.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
  };


  return response.length>0? (

    
    <div className="container">
 <Questionare response ={response} showScore={showScore} score={score} showAnswer={showAnswer}
 currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick} handleNextQuestionClick={handleNextQuestionClick}></Questionare>
  </div>

  ):(<h2 className="text-white text-center" style={{marginTop: "20%"}}>loading.....</h2>);
}

export default App;
