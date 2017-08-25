/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-24 17:57:06
*/

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import _ from 'lodash';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import ShowAddButton from './ShowAddButton';
import $ from 'jquery';

// www.pythondoc.com/pythontutorial3/index.html
class Questionapp extends Component{
	constructor(props){
		super(props);

		this.state = {
			formDisplayed: false,
			questions: []
		};

	}

	onToggleForm() {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	}

	onNewQuestion(newQuestion){
  		/*var length = this.state.questions.length;
  		newQuestion.key = length + 1;

		var newQuestions = this.state.questions.concat( newQuestion );

		newQuestions = this.sortQuestion( newQuestions );

		this.setState({
			questions: newQuestions,
		})*/
		var comments = this.state.questions;
		var newComments = comments.concat([newQuestion]);
		this.setState({data: newComments});
		
		$.get(this.props.url, newQuestion, function (result) {
	     	
	     	
	     	this.setState({
		        questions: result
		    });
		   
	    }.bind(this));

		/*$.ajax({
	       url: this.props.url,
	       dataType: 'json',
	       type: 'POST',
	       data: newQuestion,
	       success: function(data) {
	         this.setState({questions: data});
	       }.bind(this),
	       error: function(xhr, status, err) {
	         console.error('shibai');
	       }.bind(this)
	     });*/
  	}
	

	componentDidMount() {
	    this.serverRequest = $.get(this.props.url, function (result) {
	     	// var result = result.concat(newQuestion);
	     	// console.log(result);
	     	this.setState({
		        questions: result
		    });
		    // console.log(this.state.questions);
		   
	    }.bind(this));

	    // console.log(this.state.questions);
	   
  	}

  	/*componentDidMount() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, 1000);
    }*/

  	

  	/*onVote(key,newcount) {

		$.each(this.state.questions, function(index, val) {
			
			val.voteCount = newcount;

		});
		const questions = this.sortQuestion(this.state.questions);
		this.setState({
	        questions: questions
	    });
  	}

  	sortQuestion (questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	}*/

	render() {
	    return (
	      <div>
	        <div className="jumbotron text-center">
		          <div className="container">
		            <h5>问答</h5>
		            <ShowAddButton onToggleForm={() => { this.onToggleForm(); }}/>
		          </div>
		    </div>
		    <div className="main container" >
		        <QuestionForm 
		        	onNewQuestion={ () => { this.onNewQuestion(); }}
		        	onToggleForm={() => { this.onToggleForm(); }} 
			  		formDisplayed={this.state.formDisplayed }/>
		        <QuestionList questions = { this.state.questions } />
		        
		      </div>
	      </div>
	    );
	}
}

export default Questionapp;