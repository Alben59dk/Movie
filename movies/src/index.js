import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'c64a59cbbd683c2d50d4ccb9238eb5bc'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
