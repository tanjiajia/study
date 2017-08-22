/*
* @Author: Administrator
* @Date:   2017-08-17 14:00:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 14:06:15
*/
import React, {Component} from 'react';

export default class ShowAddButton extends Component{

	render(){
		return (

			<button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
		)
	}
}