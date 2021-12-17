import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', () => {
    render (<Article article={{}} />);
});

test('renders headline, author from the article when passed in through props', ()=> {
    // Arrange
    render (<Article article={{
        headline: 'headline test',
        author: 'author test',
        summary: 'summary test',
        body: 'body test',
    }} />);
    // Act
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');
    const summary = screen.queryByTestId('summary');
    const body = screen.queryByTestId('body');
    // Assert
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    // Arrange
    // Act
    // Assert
    expect(badVar).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    // Arrange
    // Act
    // Assert
    expect(badVar).toBeInTheDocument();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.