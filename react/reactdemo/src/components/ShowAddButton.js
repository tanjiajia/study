/*
* @Author: Administrator
* @Date:   2017-08-17 14:00:49
* @Last Modified by:   root
* @Last Modified time: 2018-02-09 15:42:59
*/
import React, {Component} from 'react';

export default class ShowAddButton extends Component{
	render(){
		return (

			<button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">{ this.props.addBtn }</button>
		)
	}
}