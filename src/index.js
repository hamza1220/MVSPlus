import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './fonts/AvenirNextLTPro-Regular.otf'
import './fonts/Azonix.otf'

import './index.css';
import App from './App';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
