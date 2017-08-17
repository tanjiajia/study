import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Questionapp';
// import QuestionForm from './components/QuestionForm';
import registerServiceWorker from './registerServiceWorker';

// import './style/base.less';
// import './style/config.less';
// import './style/index.less';

ReactDOM.render(
    <App />, 
	document.getElementById('app'));
registerServiceWorker();
