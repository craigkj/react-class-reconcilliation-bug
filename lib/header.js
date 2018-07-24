'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');

function Header(props) {
    const classes = `header--${props.name}`;
    return React.createElement(
        'div',
        { className: classes },
        React.createElement(
            'p',
            null,
            props.name
        )
    );
}

exports.default = Header;