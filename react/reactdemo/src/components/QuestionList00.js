/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 11:40:24
*/

import React from 'react';
// import QuestionItem from './QuestionItem';
// import $ from 'jquery';
// import axios from 'axios';
import questionsjson from '../json/Question.json';
 
export default class QuestionList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			Questions: questionsjson
		};
		
	}
	/*getInitialState: function() {
	    return {
	      Questions: []
	    };
  	},*/
	
	/*componentDidMount() {
	    this.serverRequest = $.get('./json/Question.json', function (result) {
	     	// var data = result;
	     	console.log(result);
	     	this.setState({
		        Questions: result
		    });
	     	// console.log(result)
	    }.bind(this))  
	   
  	}
*/
  
	render() {

		return(
			<div id="questions">
				{
					 this.state.Questions.map(function(qst,index){
			
						return (
							<div className="media" key={index}>
					            <div className="media-left">
					              <button className="btn btn-default">
					                <span className="glyphicon">↑</span>
					                <span className="vote-count">22</span>
					              </button>
					              <button className="btn btn-default">
					                <span className="glyphicon">↓</span>
					              </button>
					            </div>
					            <div className="media-body">
					              <h4 className="media-heading">{ qst.title }</h4>
					              <p>{ qst.description }</p>
					            </div>
					        </div>
					    )
					})
				}

	        </div>
		)
	}

}
