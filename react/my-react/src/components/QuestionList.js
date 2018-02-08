/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 16:49:29
*/

import React from 'react';
import QuestionItem from './QuestionItem';
// import as 'QuestionItem' from './QuestionItem';

export default class QuestionList extends React.Component{
  	
	render() {
		var questions = this.props.questions;
		if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');
		var questionComps = questions.map(function(qst,index){
						
			return <QuestionItem key={index} 
					questionId={qst.Id}
					title={qst.title}
					voteCount={qst.voteCount}
					description={qst.description}
					onVote = { this.props.onVote } />
		  
		}.bind(this));
		return(
			<div id="questions">
				{ questionComps }

	        </div>
		)
	}

}
