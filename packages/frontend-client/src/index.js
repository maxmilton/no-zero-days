// FIXME: Replace this with the LESS version of Semantic UI
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
