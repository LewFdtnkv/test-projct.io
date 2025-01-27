import { render, screen, fireEvent } from '@testing-library/react';
import Window from '../components/Window'; 
const setTodosMock = jest.fn();

const todos = [
  { id: 1, text: 'First Todo', completed: false },
  { id: 2, text: 'Second Todo', completed: false }
];

describe('Window component', () => {
  it('should add a new todo', () => {
    render(<Window todos={todos} setTodos={setTodosMock} mode="All" />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(setTodosMock).toHaveBeenCalledWith([
      ...todos,
      { id: expect.any(Number), text: 'New Todo', completed: false }
    ]);
  });

  it('should toggle visibility of the todo list when the DownOutlined icon is clicked', () => {
    render(<Window todos={todos} setTodos={setTodosMock} mode="All" />);

    const toggleButton = screen.getByRole('img', { name: /down/i });
    fireEvent.click(toggleButton);

    expect(screen.queryByText('First Todo')).not.toBeInTheDocument();
    expect(screen.queryByText('Second Todo')).not.toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.queryByText('First Todo')).toBeInTheDocument();
    expect(screen.queryByText('Second Todo')).toBeInTheDocument();
  });
});
