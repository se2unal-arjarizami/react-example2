import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import DogsList from './components/DogsList';
import AuthorCreation from './components/AuthorCreation';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path = '/' component = {App}/>
            <Route path = '/dogsList' component = {DogsList}/>
            <Route path = '/authorsCreation' component = {AuthorCreation}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
            
registerServiceWorker();
