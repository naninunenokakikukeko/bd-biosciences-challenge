import './App.css';
import TodoContextProvider from './contexts/TodoContextProvider';
import TodoForm from './controls/TodoForm';
import TodoList from './controls/TodoList';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoForm />
        <div className="todoContent">
          <TodoList name="TODO" className="todo" contextKey="todo"/>
          <TodoList name="DONE" className="done" contextKey="done"/>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
