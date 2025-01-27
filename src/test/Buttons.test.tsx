import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons'; 

const todos = [
  { id: 1, text: 'First Todo', completed: false },
  { id: 2, text: 'Second Todo', completed: true },
  { id: 3, text: 'Third Todo', completed: false },
];

const setModeMock = jest.fn();
const clearCompletedMock = jest.fn();

describe('Buttons component', () => {
  it('should display the correct number of items left', () => {
    render(
      <Buttons
        mode="All"
        setMode={setModeMock}
        clearCompleted={clearCompletedMock}
        todos={todos}
      />
    );

    const itemsLeft = screen.getByText('2 items left');
    expect(itemsLeft).toBeInTheDocument();
  });

  it('should correctly activate the filter buttons', () => {
    render(
      <Buttons
        mode="All"
        setMode={setModeMock}
        clearCompleted={clearCompletedMock}
        todos={todos}
      />
    );

    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');

    expect(allButton).toHaveClass('active');
    expect(activeButton).not.toHaveClass('active');
    expect(completedButton).not.toHaveClass('active');

    fireEvent.click(activeButton);
    expect(setModeMock).toHaveBeenCalledWith('Active');
  });

  it('should call clearCompleted when the Clear completed button is clicked', () => {
    render(
      <Buttons
        mode="All"
        setMode={setModeMock}
        clearCompleted={clearCompletedMock}
        todos={todos}
      />
    );

    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);
    expect(clearCompletedMock).toHaveBeenCalled();
  });
});
