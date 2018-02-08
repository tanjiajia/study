/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   root
* @Last Modified time: 2017-10-18 17:18:33
*/

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import _ from 'lodash';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import ShowAddButton from './ShowAddButton';
// import $ from 'jquery';

// www.pythondoc.com/pythontutorial3/index.html
class Questionapp extends Component{
	constructor(props){
		super(props);

		this.state = {
			formDisplayed: false,
			showButton: true,
			newQuestion:[],
			questions:[
				{
					"Id":1,
					"title":"aaaa？",
					"description":"aaaaaaaaaaaaaaaaaaaaaaaaaa。",
					"voteCount":10
				},
				{
					"Id":2,
					"title":"bbbb？",
					"description":"bbbbbbbbbbbbbbbbbbbbbbb",
					"voteCount":8
				}
			]
		};

	}

	/*setState(obj) {
        this.setState({
        	questions: obj
        });
    }*/

	onToggleForm() {
		this.setState({
			formDisplayed: !this.state.formDisplayed,
			showButton: !this.state.showButton
		})
	}

	onNewQuestion(newQuestion){

		var comments = this.state.questions;
		var newComments = comments.concat(newQuestion);
		console.log(newComments);
		newQuestion = this.sortQuestion( newComments );

		this.setState({
			questions: newQuestion
		});

  	}

	sortQuestion(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	}

	componentDidMount() {
	    /*this.serverRequest = $.get(this.props.url, function (result) {
	     	
	     	// console.log(result);
	     	this.setState({
		        questions: result
		    });
		    // console.log(this.state.questions);
		   
	    }.bind(this));*/

	    // console.log(this.state.questions);
	   
  	}

  	

  	onVote(key,newcount) {

		/*var questionsCount=this.state.questions;
		questionsCount[key].voteCount = newcount;
		questionsCount = this.sortQuestion(questionsCount);

		this.setState({
			questions: questionsCount
		})*/
		
		var questions = _.uniq(this.state.questions);
		var index = _.findIndex(questions,function(q){
			return q.Id === key;
		});

		questions[index].voteCount = newcount;

		questions = this.sortQuestion( questions );

		this.setState({
			questions: questions,
		});

  	}



	render() {
	    return (
	      <div>
	        <div className="jumbotron text-center">
		          <div className="container">
		            <h5>问答</h5>
		            <ShowAddButton onToggleForm={() => { this.onToggleForm(); }} showButton = { this.state.showButton }/>
		          </div>
		    </div>
		    <div className="main container" >
		        <QuestionForm ref='addQuection'      	
		        	onNewQuestion={ this.onNewQuestion.bind(this) }
		        	onToggleForm={() => { this.onToggleForm(); }} 
			  		formDisplayed={this.state.formDisplayed }
			  		questions = { this.state.questions }
			  		newQuestion = { this.state.newQuestion } />
		        <QuestionList questions = { this.state.questions } onVote={ this.onVote } />
		        
		      </div>
	      </div>
	    );
	}
}

export default Questionapp;