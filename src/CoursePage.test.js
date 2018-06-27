import React from 'react';
import ReactDOM from 'react-dom';
import CoursePage from './CoursePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoursePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
