import express from 'express';
import Header from './header';
import React from 'react';
import { renderToString } from 'react-dom/server';

const PORT = 8088;

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static('public'));

app.get('/test', (request, response) => {
    const component = renderToString(<Header name="Leonardo" />);
    response.render('index', {app: component});
});

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`)
});
