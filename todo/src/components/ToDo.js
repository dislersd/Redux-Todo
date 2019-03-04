import React from "react";
import { connect } from "react-redux";

const ToDo = props => {

    return (
      <>
        <h1>{props.titleFromMSTP}</h1>
      </>
    );
}

const mapStateToProps = state => {
  return {
    titleFromMSTP: state.title,
  }
}

export default connect(mapStateToProps, {})(ToDo);
