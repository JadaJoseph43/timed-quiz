import React from 'react';
import './App.css';
import QuizQuestions from'./components/QuizQuestions'
import questions from './questions.json'

const TITLE_STATE = 0 
const QUESTION_STATE = 1
const TIME_LIMIT = 10

class TitlePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {titleText: "Wlecome to our Quiz!"
    currentState: TITTLE_STATE,
    counter: 0,
    currentQuestion: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
    }

  nextQuestion() {
    clearInterval(this.timer)
    this.setState({
      titleText:"You answered early!!!",
      currentQuestion: TITTLE_STATE
    })
    
    
  }
  start() {
    console.log("Staring!")
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})
    this.timer = setInterval(() => {
      console.log("INTERVAL CALLED")
      this.setState({counter : this.state.counter+1})
      if(this.setState.counter < this.timeLimit) {
        this.setState({tittleText:"Begin the quiz! " + this.state.counter})
      }else {
        this.setState({titleText}:"Time's up!!")
        clearInterva
      }

    }
  }
  render(props){
    console.log("RENDER CALLED")
    return (
    <div className="App">
      <div>{this.timeLimit - this.state.counter}</div>
      {(this.state.currentState => QUESTION_STATE) ?
        <QuizQuestion anwsers={questions[this.state.currentQuestion].possibleAnswers}
        question={question[this.state.curentQuestion].question}
        nextquestion={() => this.nextQuestion()} />
     
        <h1 className='title'>{this.state.titleText}</h1>
      {(this.state.currentState == QUESTIONSTATE) ?
     <>
     <h1> className='tittle'></h1>{questions[this.state.currentQuestion].question}
      <QuizQuestions answers= {qnextQuestion={() => this.nextQuestion()} > : null}
      <input id='startButton' type="button" value="Start" onClick={() => this.start()}></input>
    </div>
  )
  }
}

function App() {
  return (
    <TitlePage />
  )
}

export default App;
