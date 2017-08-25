/*
* @Author: Administrator
* @Date:   2017-08-17 10:11:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:05:15
*/

import React, { Component } from  "react";


export default class QuestionFrom extends Component{
	constructor(props){
		super(props);
		this.state = { 
			tit:'your title...',
			des:'Say something...'
		};
		
	}

	handleForm(e){
		e.preventDefault();
		if(!this.refs.title.value.trim()) return;
		
		var newQuestion = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount: 0,
			Id: this.props.questions.length + 1

		};
		// var comments = this.props.questions;
		// newQuestion = comments.concat(newQuestion);
		// console.log(newComments);
		// console.log(this.props.questions);
		this.props.onNewQuestion(newQuestion);

		
		// this.refs.addQuestionForm.reset();
		this.refs.title.value = '';
		this.refs.description.value = '';

	}


	render() {
		var styleObj={
			display: this.props.formDisplayed ? 'block': 'none',
		}

    	return (
      		<form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handleForm.bind(this)}>
	           <div className="form-group">
	               <label htmlFor="qtitle">question</label>
	               <input ref="title" type="text" className="form-control" id="qtitle" placeholder="your title..." />
	          	</div>
	          	<textarea ref="description"  className="form-control" rows="3" placeholder="Say something..."></textarea>
	          	<button className="btn btn-success pull-right">确认</button>
	          	<button className="btn btn-default pull-right" onClick={ this.props.onToggleForm }>取消</button>
	        </form>
    );
  }
}

