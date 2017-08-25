/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:04:37
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
			questions: [],
			newQuestion:[]
		};

	}

	/*setState(obj) {
        this.setState({
        	questions: obj
        });
    }*/

	onToggleForm() {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	}

	onNewQuestion(newQuestion){

		var comments = this.state.questions;
		var newComments = comments.concat(newQuestion);
		// console.log(newComments);
		newQuestion = this.sortQuestion( newComments );

		this.setState({
			questions: newQuestion
		});
		console.log(this.state.questions);
		// console.log('提交成功')

		// console.log('提交form成功');
		/*$.get(this.props.url, newQuestion, function (result) {
	     	
	     	
	     	this.setState({
		        questions: result
		    });
		console.log('提交ajax成功');
		console.log(this.state.questions);
		   
	    }.bind(this));*/

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

	sortQuestion(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	}

	componentDidMount() {
	    this.serverRequest = $.get(this.props.url, function (result) {
	     	
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

  	

  	onVote(key,newcount) {

		var questionsCount=this.state.questions;
		questionsCount[key].voteCount = newcount;
		questionsCount = this.sortQuestion(questionsCount);

		this.setState({
			questions: questionsCount
		})

  	}



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
		        <QuestionForm ref='addQuection'      	
		        	onNewQuestion={ this.onNewQuestion.bind(this) }
		        	onToggleForm={() => { this.onToggleForm(); }} 
			  		formDisplayed={this.state.formDisplayed }
			  		questions = { this.state.questions }
			  		newQuestion = { this.state.newQuestion } />
		        <QuestionList questions = { this.state.questions } onVote={ () => { this.onVote(); } } />
		        
		      </div>
	      </div>
	    );
	}
}

export default Questionapp;