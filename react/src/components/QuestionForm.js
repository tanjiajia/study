/*
* @Author: Administrator
* @Date:   2017-08-17 10:11:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 14:22:46
*/

import React, { Component } from  "react";



export default class QuestionFrom extends Component{
	
	handleSubmit(e){
		e.preventDefault();
		if(!this.refs.title.getDOMNode().value) return;

		var newQuestion = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			voteCount: 0,
		}

		this.refs.addQuestionForm.getDOMNode().reset();

		// this.props.onNewQuestion( newQuestion );
	}

	
	

	render() {
		var styleObj={
			display: this.props.formDisplayed ? 'block': 'none',
		}

    	return (
      		<form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handleForm}>
	           <div className="form-group">
	               <label htmlFor="qtitle">question</label>
	               <input ref='title' type="text" className="form-control" id="qtitle" placeholder="your title..." />
	          	</div>
	          	<textarea ref='description' className="form-control" rows="3" placeholder="Say something..."></textarea>
	          	<button className="btn btn-success pull-right">确认</button>
	          	<button className="btn btn-default pull-right" onClick={ this.onToggleForm }>取消</button>
	        </form>
    );
  }
}



// export default QuestionForm;