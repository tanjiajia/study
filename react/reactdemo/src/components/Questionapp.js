/*
* @Author: Administrator
* @Date:   2017-08-17 10:07:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 14:08:38
*/

import React, { Component } from 'react';

import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'
import ShowAddButton from './ShowAddButton'
// import logo from './images/logo.svg';
// import '../style/App.less';
// import '../style/App.sass';
// import '../style/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
	          <div className="container">
	            <h1>问答</h1>
	            <ShowAddButton />
	          </div>
	    </div>
	    <div className="main container">
	        <QuestionForm />
	        <QuestionList />
	        
	      </div>
      </div>
    );
  }
}

export default App;