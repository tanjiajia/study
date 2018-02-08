/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   root
* @Last Modified time: 2018-02-08 11:48:16
*/
import React, { Component } from 'react';

class QuestionItem extends Component{
	constructor (props){
		super(props);
	}

	voteUp = (e) => {
		console.log('this.props.voteCount', e)
		var newCount = parseInt(this.props.voteCount ,10) + 1;
		console.log('this.props.questionKey', this.props.questionKey)
		this.props.onVote( this.props.questionKey, newCount )
	}
	voteDown = (e) => {
		var newCount = parseInt(this.props.voteCount ,10) - 1;
		this.props.onVote( this.props.questionKey, newCount )
	}
	render(){
		
		return(			
	        <div className="media">
	            <div className="media-left">
	              <button className="btn btn-default" onClick={ this.voteUp }>
	                <span className="">↑</span>
	              </button>
	              <span className="vote-count">{ this.props.voteCount }</span>
	              <button className="btn btn-default" onClick={this.voteDown}>
	                <span className="">↓</span>
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