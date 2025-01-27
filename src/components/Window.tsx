import { useState } from 'react';
import { Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import '../App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface WindowProps {
  todos: Todo[];
  setTodos: (newTodos: Todo[]) => void;
  mode: string; 
}

export default function Window({ todos, setTodos, mode }: WindowProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const filteredTodos = todos.filter((todo) => {
    if (mode === 'Active') return !todo.completed;
    if (mode === 'Completed') return todo.completed;
    return true; 
  });

  return (
    <div className="todo-app">
      <Input
        className="input_window"
        placeholder="What needs to be done?"
        prefix={<DownOutlined onClick={handleToggleVisibility} />}
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onPressEnter={handleAddTodo}
      />
      <ul className="todo-list">
        {filteredTodos.length !== 0 &&
          isVisible &&
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              onClick={() => handleToggleComplete(todo.id)}
            >
              <div className="todo-icon-container">
                {todo.completed ? (
                  <FaCheckCircle className="completed-icon" />
                ) : (
                  <FaCircle className="incomplete-icon" />
                )}
              </div>
              <span>{todo.text}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
