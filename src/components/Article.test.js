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
    expect(headline).toHaveTextContent('headline test');
    expect(author).toHaveTextContent('author test');
    expect(summary).toHaveTextContent('summary test');
    expect(body).toHaveTextContent('body test');
});

test('renders "Associated Press" when no author is given', ()=> {
    // Arrange
    render (<Article article={{
        headline: 'headline test',
        summary: 'summary test',
        body: 'body test',
    }} />);
    // Act
    const noAuthor = screen.queryByTestId('author')
    // Assert
    expect(noAuthor).toHaveTextContent('Associated Press');
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();
    // Arrange
    render (<Article handleDelete={mockHandleDelete} article={{
        headline: 'headline test',
        author: 'author test',
        summary: 'summary test',
        body: 'body test',
    }} />);
    // Act
    const delButt = screen.getByTestId('deleteButton');
    userEvent.click(delButt);
    // Assert
    expect(mockHandleDelete).toBeCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.