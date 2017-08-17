/*
* @Author: Administrator
* @Date:   2017-08-17 13:50:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 14:04:33
*/

import React, { Component } from 'react';
import QuestionItem from './QuestionItem';

export default class QuestionList extends Component{

	render(){

		return(
			<div id="questions" className="">
				<QuestionItem />

	        </div>
		)
	}
}