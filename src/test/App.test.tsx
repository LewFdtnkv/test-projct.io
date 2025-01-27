import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing and displays the title', () => {
    render(<App />);
    
    const title = screen.getByText('TODOS');
    expect(title).toBeInTheDocument();
  });
});
