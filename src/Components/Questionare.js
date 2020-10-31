import React, { Component } from 'react';
class Questionare extends Component  {
  colorButton(answer,correctAnswer)
  {
      let btnColor='';
    if(this.props.showAnswer && answer===correctAnswer)
    btnColor='btn btn-success';
    else
    btnColor='btn';
    return btnColor;
  }
    render() {
        const question=this.props.response[this.props.currentQuestion].question;
        const correctAnswer=this.props.response[this.props.currentQuestion].correct_answer;
        const answers=this.props.response[this.props.currentQuestion].answers;
        const chars=['A.','B.','C.','D.'];
    return(
this.props.showScore ? (
    <div className="card justify-content-center mt-5 cardfinal"  >
              <h1 justify-content-center>
                  You scored {this.props.score} out of {this.props.response.length}
              </h1>
      </div>
          ) : (
              <>
  <div className="card justify-content-center mt-5 "  >
 
    <div className="card-header text-center">
      question {this.props.currentQuestion+1}/10
      <h4 dangerouslySetInnerHTML={{__html:question}}/> 
    </div>
    <div className="card-body">
    <form >

    {answers.map((answer,i)=>{
    return( 
    <div className="form-group">
        <button className={this.colorButton(answer,correctAnswer)}
         onClick={ () =>this.props.handleAnswerOptionClick(answer===correctAnswer)} 
         type="button">
            <strong>{chars[i]} </strong> <span dangerouslySetInnerHTML={{__html:answer}}/></button>
        </div>
        );
        
        }
        )}    
 </form>
 
    </div>
   
    </div>
    {this.props.showAnswer&&(
        <button className='btn btn-primary' onClick={()=>this.props.handleNextQuestionClick()}>Next Question</button>
    )}
    
    </>
    ))
          }
          }
export default Questionare;