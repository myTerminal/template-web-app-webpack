// Import styles

import '../styles/styles.less';

// Special imports for bootstrap

global.jQuery = require('jquery');
const $ = global.jQuery,
      Bootstrap = require('bootstrap');

// Import library scripts

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    NavLink
} from 'react-router-dom';

// Import components

import Banner from './components/banner.jsx';

// Import pages

import Home from './pages/home.jsx';
import About from './pages/about.jsx';

class App extends React.Component {

    constructor () {
        super();

        this.state = {};
    }

    render () {
        return (
            <div>
              <Banner />
              <span className='fa fa-thumbs-o-up fa-lg'></span>
              <NavLink to='/' exact activeClassName='active'>Home</NavLink>
              <NavLink to='/about' activeClassName='active'>About</NavLink>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
            </div>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
), document.getElementById('page'));
