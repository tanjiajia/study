/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   root
* @Last Modified time: 2018-02-09 15:43:47
*/

import React, { Component } from 'react';

import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'
import ShowAddButton from './ShowAddButton'
import _ from 'lodash'
// import $ from 'jquery'
// 
class Questionapp extends Component {
	constructor (props){
		super(props);
		// this.onVote = this.onVote.bind(this);  
		this.state = { 
			questions:[
				{
					key: 1,
					title:'矛盾的本质是什么？',
					description:'作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
					voteCount: 10,
				},
				{
					key: 2,
					title:'热爱编程是一种怎样的体验？',
					description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
					voteCount: 8,
				}
			],
			formDisplayed: false,
			addBtn: '添加问题'
		}
		// this.getQuestion();
	}
	
	onVote  = (key,newCount) =>  {
		var questions = _.uniq(this.state.questions)
		var index = _.findIndex(questions, function(qst){
			return qst.key = key
		} )

		questions[index].voteCount = newCount

		questions = this.sortQuestion(questions)

		this.setState({
			questions: questions
		})
	}

	onToggleForm = () => {
		this.setState({
			formDisplayed: !this.state.formDisplayed,
		})
		if (this.state.formDisplayed) {
			this.setState({
				addBtn: '添加问题'
			})
		} else {
			this.setState({
				addBtn: '取消'
			})
		}
	}

	onNewQuestion = (newQuestion) => {
		newQuestion.key = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat(newQuestion);

		newQuestions = this.sortQuestion(newQuestions);

		this.setState({
			questions: newQuestions,
		})
	}

	sortQuestion (questions) {
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		})

		return questions

	}
	// getQuestion(){
	// 	$.ajax({
	// 		url: 'json/Question.json',
	// 		dataType: 'json',
	// 		type: 'get',
	// 		success : res => {
	// 			this.setState({ questions:res });
	// 			alert('成功');
	// 		},
	// 		error : function(data){
 //            	alert('失败');
 //          	}
	// 	})
	// }
  	render() {
	    return (
	      <div>
	        <div className="jumbotron text-center">
		          <div className="container">
		            <h5>问答</h5>
		            <ShowAddButton onToggleForm={ this.onToggleForm } addBtn={ this.state.addBtn }/>
		          </div>
		    </div>
		    <div className="main container">
		        <QuestionForm
		        	onNewQuestion={ this.onNewQuestion }
			  		onToggleForm={ this.onToggleForm } 
			  		formDisplayed={ this.state.formDisplayed } />
		        <QuestionList onVote={ this.onVote } questions={ this.state.questions }/>
		        
		      </div>
	      </div>
	    );
  	}
}

export default Questionapp;