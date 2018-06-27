'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/CoursePage.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends Component {
  constructor(props,context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}> {course.title}, index: {index}</div>;
  }

  render() {
    const {courses} = this.props;
    return (
      <div className="CoursePage">
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
