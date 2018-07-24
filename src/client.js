import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';

const mount = document.getElementById('the-mount');

ReactDom.render(<Header name="Donatello" />, mount);

