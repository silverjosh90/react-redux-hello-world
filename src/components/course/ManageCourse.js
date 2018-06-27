import {Component} from 'react';


class ManageCourse extends Component {
  constructor {
    super(props, context);

    this.state = {
      course: {
        title: ''
      }
    };
    
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSave(e) {
    this.props.actions.loadCourses(this.state.course);
    this.state.course.title = '';
  }

  render() {
    <input
      type="text"
      onChange={this.onTitleChange}
      value={this.state.course.title} />

    <input
      type="submit"
      value="save"
      onClick={this.onClickSave} />
  }
}
