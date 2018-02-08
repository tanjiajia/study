/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 16:28:08
*/
import React, { Component } from 'react';

class QuestionItem extends Component{
	/*constructor(props){
		super(props);
		// this.state = this.props.voteCount;	
	}*/

	/*componentDidMount(){
		console.log(this.props.voteCount);
	}*/
	
	// 

	voteUp(e){
		var count = this.props.voteCount;
		var newcount = parseInt(count,10) + 1;
		// console.log(this.props.voteCount);
		this.props.onVote(this.props.questionId, newcount);
	}

	voteDown(e){
		var newcount = parseInt(this.props.voteCount,10) - 1;
		console.log(newcount);
		this.props.onVote(this.props.questionId, newcount);
	}

	render(){

		return(			
	        <div className="media">
	            <div className="media-left">
	              	<button className="btn btn-default" onClick={ this.voteUp }>
	                	<span className="glyphicon">↑</span>
	                	<span className="vote-count">{ this.props.voteCount }</span>
	              	</button>
	              		<button className="btn btn-default" onClick={ this.voteDown }>
	                	<span className="glyphicon">↓</span>
	              	</button>
	            </div>
	            <div className="media-body">
	              	<h4 className="media-heading">{ this.props.title }</h4>
	              	<p>{ this.props.description }</p>
	            </div>
	        </div>


		)
	}
}

export default QuestionItem;