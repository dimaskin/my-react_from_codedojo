import React from 'react';
import ReactDOM from 'react-dom';

const title    = React.createElement('h1',null,'React to-do');
const subtitle = React.createElement('p',{className: 'subtitle'},'Мое первое приложение на реакте');
const container = React.createElement('div',null, title, subtitle);


function App() {
	return (
	  <div>
  		<h1>React todo</h1>
  		<p className="subtitle">Мое первое приложение на реакте!!!</p>
	  </div>
);
}


//const dom = ReactDOM.render(app, document.getElementById('root'));
//console.log(dom);
ReactDOM.render(<App />, document.getElementById('root'));
console.log(App);