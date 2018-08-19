import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import './index.css';
import {robots} from './robots';
import CardList from './CardList';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <CardList robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
