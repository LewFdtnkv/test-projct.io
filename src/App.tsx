import { useState } from 'react';
import './App.css';
import Window from './components/Window';
import Buttons from './components/Buttons';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [mode, setMode] = useState<string>('All'); 
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="main_window">
      <h1 className="h1_title">TODOS</h1>
      <Window todos={todos} setTodos={setTodos} mode = {mode}/>
      <Buttons mode={mode} setMode={setMode} clearCompleted={clearCompleted} todos={todos} />
    </div>
  );
}
