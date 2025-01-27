import '../App.css'; 
interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
interface ModeProps {
  mode: string;
  setMode: (value: string) => void;
  clearCompleted: () => void;
  todos: Todo[];
}

export default function Buttons({ mode, setMode, clearCompleted, todos }: ModeProps) {
  return (
    <div className="button_window">
      <span className="items-left">{todos.length} items left</span>
      <div className="button_group">
        <button
          onClick={() => setMode('All')}
          className={`filter_button ${mode === 'All' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setMode('Active')}
          className={`filter_button ${mode === 'Active' ? 'active' : ''}`}
        >
          Active
        </button>
        <button
          onClick={() => setMode('Completed')}
          className={`filter_button ${mode === 'Completed' ? 'active' : ''}`}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} className="clear_button">
        Clear completed
      </button>
    </div>
  );
}
