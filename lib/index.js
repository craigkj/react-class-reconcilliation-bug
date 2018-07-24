'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 8088;

const app = (0, _express2.default)();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', _express2.default.static('public'));

app.get('/test', (request, response) => {
    const component = (0, _server.renderToString)(_react2.default.createElement(_header2.default, { name: 'Leonardo' }));
    response.render('index', { app: component });
});

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);
});