import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Module {activeModule.title}</strong>
    <br />
    <strong>Lesson {activeLesson.title}</strong>
    <br />
    <br />
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
