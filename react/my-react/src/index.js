import React from 'react';
import ReactDOM from 'react-dom';

import Questionapp from './components/Questionapp';
// import QuestionForm from './components/QuestionForm';
import registerServiceWorker from './registerServiceWorker';

// import './style/base.less';
// import './style/config.less';
// import './style/index.less';

ReactDOM.render(
    <Questionapp />, 
	document.getElementById('app'));
registerServiceWorker();
