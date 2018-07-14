/**
 * No Zero Days Web App
 * @overview 💪 A React.js powered personal productivity system to help you
 * achieve something every day and build a habit of daily self improvement.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 Max Milton
 * Licensed under the MIT License
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
