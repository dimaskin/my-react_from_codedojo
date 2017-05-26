import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx'
import Todo from './components/Todo.jsx'

function App(props) {
  console.log(props);
	return (
    <main>

      <Header title={props.title} />

      <section className="todo-list">

        <Todo title={"Изучить реакт"} completed = {true}/>

        <Todo title={"Изучить js"} completed = {false}/>
      </section>
    </main>		
	);
}

App.propTypes = {
  
};

App.defaultProps = {
  
}

ReactDOM.render(<App />, document.getElementById('root'));
