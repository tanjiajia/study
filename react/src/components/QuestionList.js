/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 17:07:26
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
							<QuestionItem key={qst.id} 
								questionKey={qst.index}
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
