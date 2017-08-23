/*
* @Author: Administrator
* @Date:   2017-08-17 10:11:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 17:56:04
*/

import React, { Component } from  "react";
// import ReactDOM from 'react-dom';
// import $ from 'jquery';

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
		// if(!this.refs.title.getDOMNode().value.trim()) return;
		/* this.setState({
		 	tit: e.target.value,
			des: e.target.value
		 });*/

		var newQuestion = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount: 0
		};
		console.log(newQuestion);

		this.refs.addQuestionForm.reset();

		this.props.onNewQuestion( newQuestion );
		
		// console.log(titleVal);
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



// export default QuestionForm;