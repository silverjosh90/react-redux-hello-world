import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoursePage from './components/course/CoursePage';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {Provider} from 'react-redux';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <CoursePage />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
