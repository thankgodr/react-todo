import './App.css';
import { useState } from 'react';
import Header from './componnets/header';
import TodoInput from './componnets/todoinput';
import TodoItem from './componnets/todoitem';

function App() {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState('');
  const updateStateCurrent = (newCurrent) => {
    setCurrent(newCurrent);
  };

  const addnew = () => {
    const newTodo = {
      name: current,
      completed: false,
      id: Math.round((new Date()).getTime() / 1000),
    };
    const newList = [...todos];
    newList.push(newTodo);
    setTodos(newList);
    updateStateCurrent('');
  };

  const deleteTodo = (todoId) => {
    const newList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newList);
  };

  const updateTodo = (toEdit) => {
    const newList = todos.filter((todo) => todo.id !== toEdit.id);
    newList.push(toEdit);
    setTodos(newList);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-3" />
        <div className="col-7 ml-2 mr-2">
          <Header />
          <TodoInput
            updateCurrent={(ev) => updateStateCurrent(ev)}
            current={current}
            addnew={addnew}
          />
          <ul className="list-group rounded-0">
            {todos.sort((a, b) => a.id > b.id).map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
