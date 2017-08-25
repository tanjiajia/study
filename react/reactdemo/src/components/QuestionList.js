/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:05:21
*/

import React from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends React.Component{
  	
	render() {

		return(
			<div id="questions">
				{

					this.props.questions.map(function(qst,index){
						
						return (
							<QuestionItem key={index} 
								questionKey={qst.Id}
								title={qst.title}
								voteCount={qst.voteCount}
								description={qst.description} />
					    )
					})
				}

	        </div>
		)
	}

}
