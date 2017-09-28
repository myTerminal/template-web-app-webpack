/* global global require */

import '../styles/styles.less';

global.jQuery = require('jquery');

const bootstrap = require('bootstrap');
const $ = global.jQuery;
const React = require('react');
const ReactDOM = require('react-dom');

const page = document.getElementById('page');

var Banner = React.createClass({
    render: function () {
        return <div className='banner'></div>;
    }
});

var Test = React.createClass({
    render: function () {
        return <div>
            <Banner />
            <div className='test'>This is a component!</div>
            </div>;
    }
});

ReactDOM.render(<Test />, page);
