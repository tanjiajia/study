/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 14:07:31
*/

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import _ from 'lodash';
import QuestionForm from './QuestionForm';
// var QuestionList = require('./QuestionList');
import QuestionList from './QuestionList';
import ShowAddButton from './ShowAddButton';

// www.pythondoc.com/pythontutorial3/index.html
class Questionapp extends Component{
	constructor(props){
		super(props);

		this.state = {
			formDisplayed: false
		};
	}

	onToggleForm(){
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	}

	render() {
	    return (
	      <div>
	        <div className="jumbotron text-center">
		          <div className="container">
		            <h5>问答</h5>
		            <ShowAddButton onToggleForm={this.onToggleForm}/>
		          </div>
		    </div>
		    <div className="main container" >
		        <QuestionForm 
		        	onToggleForm={this.onToggleForm} 
			  		formDisplayed={this.state.formDisplayed }/>
		        <QuestionList />
		        
		      </div>
	      </div>
	    );
	}
}

export default Questionapp;