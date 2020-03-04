import React from 'react';

class QuizQuestions extends React.Component {
  render() {
  return(
    <>
    <h1> This is a question</h1>
    <input id='button' value="Answer 1" className="answerButton" onClick={() => this.props.nextQuestion
    <input id='answerButton' type="button" value="Answer" onClick={() => this.start()}></input>
    
  )
}

export default QuizQuestions
