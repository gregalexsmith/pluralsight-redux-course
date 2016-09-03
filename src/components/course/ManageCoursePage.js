import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.initalCourse),
      errors: {}
    };
  }

  render() {
    return (
      <CourseForm
      allAuthors={[]}
      course={this.state.course}
      errors={this.state.errors}/>
    );
  }
}

ManageCoursePage.propTypes = {
  initalCourse: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let initalCourse = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};
  return {
    course: initalCourse
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
