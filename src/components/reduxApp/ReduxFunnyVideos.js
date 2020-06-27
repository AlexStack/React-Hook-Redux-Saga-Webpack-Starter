/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReduxFunnyVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickTimes: 0,
      keyPressTimes: 0,
      pressedKey: "null",
      secretKey: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  handleFieldChange = (event) => {
    this.setState({
      clickTimes: this.state.clickTimes + 1,
      keyPressTimes: 0,
      pressedKey: "null",
      secretKey: null,
    });
  };

  render() {
    return (
      <div className="text-center text-danger">
        ReduxFunnyVideos videos list
      </div>
    );
  }
}
