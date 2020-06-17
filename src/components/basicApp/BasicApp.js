/* eslint-disable no-undef */
import React, { Component } from "react";
import PropTypes from "prop-types";
import BasicAppPresent from "./BasicAppPresent";

export default class BasicApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickTimes: 0,
      keyPressTimes: 0,
      pressedKey: "null",
      secretKey: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state);
    document.addEventListener("keydown", this.handleKeyPress, false);
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

  handleKeyPress = (event) => {
    if (this.state.secretKey === null) {
      this.setState({
        secretKey: event.key,
      });
    } else if (event.key === "Escape") {
      this.setState({
        clickTimes: 0,
        keyPressTimes: 0,
        pressedKey: "null",
        secretKey: null,
      });
    } else if (this.state.pressedKey === this.state.secretKey) {
      // do nothing
    } else {
      this.setState({
        pressedKey: event.key,
        keyPressTimes: this.state.keyPressTimes + 1,
      });
    }

    console.log("key pressed event:", event);
  };

  render() {
    return (
      <div className="text-center text-danger">
        <BasicAppPresent
          clickTimes={this.state.clickTimes}
          keyPressTimes={this.state.keyPressTimes}
          pressedKey={this.state.pressedKey}
          secretKey={this.state.secretKey}
          handleFieldChange={this.handleFieldChange}
        />
      </div>
    );
  }
}
