import React from 'react';
import ReactDOM from 'react-dom';

const title    = React.createElement('h1',null,'React to-do');
const subtitle = React.createElement('p',{className: 'subtitle'},'Мое первое приложение на реакте');
const container = React.createElement('div',null, title, subtitle);

const app = (
   <div>
  <h1>React todo</h1>
  <p className="subtitle">Мое первое приложение на реакте!!!</p>
</div>
);

console.log(title);
console.log(subtitle);
console.log(container);

const dom = ReactDOM.render(app, document.getElementById('root'));
console.log(dom);