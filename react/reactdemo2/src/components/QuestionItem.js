/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 10:41:34
*/
import React, { Component } from 'react';

class QuestionItem extends Component{
	/*voteUp(){
		const newcount = parseInt(this.props.voteCount, 10)+1;
		this.props.onVote(this.props.questionKey, newcount);
	}

	voteDown(){
		const newcount = parseInt(this.props.voteCount, 10)-1;
		this.props.onVote(this.props.questionKey, newcount);
	}*/

	render(){

		return(			
	        <div className="media">
	            <div className="media-left">
	              <button className="btn btn-default">
	                <span className="glyphicon">↑</span>
	                <span className="vote-count">{ this.props.voteCount }</span>
	              </button>
	              <button className="btn btn-default">
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