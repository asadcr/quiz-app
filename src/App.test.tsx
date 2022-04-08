import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Quiz from './Pages/Quiz';

test('renders the header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quiz App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders question 1, moves to question 2 when clicked', async () => {
  render(<Quiz />);
  await waitFor(() => screen.getByText(/Question 1/i));

  var answerButtonElement =  screen.getByText('Lahore', { selector: 'button' });
  answerButtonElement.click();

  await waitFor(() => screen.getByText(/Question 2/i));
  const question2Element = screen.getByText(/Question 2/i);
  expect(question2Element).toBeInTheDocument();
});

test('renders scoreboard after all questions have been selected.', async () => {
  render(<Quiz />);
  await waitFor(() => screen.getByText(/Question 1/i));

  var firstAnswerButtonElement =  screen.getByText('Lahore', { selector: 'button' });
  firstAnswerButtonElement.click();

  await waitFor(() => screen.getByText(/Question 2/i));
  var secondAnswerButtonElement =  screen.getByText('Zero', { selector: 'button' });
  secondAnswerButtonElement.click();

  await waitFor(() => screen.getByText(/Question 3/i));
  var lastAnswerButtonElement =  screen.getByText('1999', { selector: 'button' });
  lastAnswerButtonElement.click();

  const scoreElement = screen.getByText(/You scored 0 out of 3/i);
  expect(scoreElement).toBeInTheDocument();
});
