/*
* @Author: Administrator
* @Date:   2017-08-17 10:11:43
* @Last Modified by:   root
* @Last Modified time: 2018-02-08 14:11:37
*/

import React, { Component } from  "react";


class QuestionForm extends Component{
	handleForm = (e) => {
		e.preventDefault();
		if(!this.refs.title.getDOMNode().value) return;

		var newQuestion = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			voteCount: 0,
		}

		this.refs.addQuestionForm.getDOMNode().reset();

		this.props.onNewQuestion(newQuestion);
	}
	render() {
    	return (
      		<form ref="addQuestionForm" name="addQuestion" className="clearfix" onSubmit={ this.handleForm }>
	           <div className="form-group">
	               <label htmlFor="qtitle">问题</label>
	               <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
	          	</div>
	          	<textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
	          	<button className="btn btn-success pull-right">确认</button>
	          	<button className="btn btn-default pull-right" onClick={ this.props.onToggleForm }>取消</button>
	        </form>
    );
  }
}



export default QuestionForm;