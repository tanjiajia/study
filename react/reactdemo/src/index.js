import React from 'react';
import ReactDOM from 'react-dom';
// import './style/index.less';
// import './style/index.sass';
import './style/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
	document.getElementById('root'));
registerServiceWorker();
