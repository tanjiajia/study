import React from 'react';
import ReactDOM from 'react-dom';

import Questionapp from './components/Questionapp';
// import QuestionForm from './components/QuestionForm';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Questionapp  url="json/Question.json" />, 
	document.getElementById('app'));
registerServiceWorker();
