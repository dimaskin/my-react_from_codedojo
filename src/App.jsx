import React from 'react';
import ReactDOM from 'react-dom';

const title    = React.createElement('h1',null,'React to-do');
const subtitle = React.createElement('p',{className: 'subtitle'},'Мое первое приложение на реакте');
const container = React.createElement('div',null, title, subtitle);

//React.createElement('h1', { className: 'title' }, 'React');
//ReactDOM.render(container, document.getElementById('root'));

ReactDOM.render(container, document.getElementById('root'));