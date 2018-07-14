/**
 * No Zero Days Web App
 * @overview 💪 A React.js powered personal productivity system to help you
 * achieve something every day and build a habit of daily self improvement.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

// FIXME: Replace this with the LESS version of Semantic UI
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
