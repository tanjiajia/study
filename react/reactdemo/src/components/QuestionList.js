/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   root
* @Last Modified time: 2018-02-23 09:51:41
*/

import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends Component {
	// constructor (props){
	// 	super(props);
	// }

	render () {
        let questions = this.props.questions
		if ( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组')

		let questionComps = questions.map((qst) => {
	 		return <QuestionItem key={qst.key}
	 			questionKey={qst.key}
	 			title={qst.title}
	 			description={qst.description}
	 			voteCount={qst.voteCount}
				onVote={ this.props.onVote } />
		})
		return(
			<div id="questions" className="">
				{questionComps}
	        </div>
		)
	}
}