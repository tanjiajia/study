/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 13:28:11
*/

import React from 'react';
import QuestionItem from './QuestionItem';
import $ from 'jquery';
// import axios from 'axios';
// import questionsjson from '../json/Question.json';
 
export default class QuestionList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			Questions: []
		};
		
	}

	componentDidMount() {
	    this.serverRequest = $.get('./json/Question.json', function (result) {
	     	// var data = result;
	     	console.log(result);
	     	this.setState({
		        Questions: result
		    });

	    }.bind(this))  
	   
  	}

  
	render() {

		return(
			<div id="questions">
				{
					 this.state.Questions.map(function(qst,index){
			
						return (
							<QuestionItem key={qst.index} 
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
