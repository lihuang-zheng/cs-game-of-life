import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import "./Buttons.style.css";

export default class Buttons extends Component {
  handleSelect = (e) => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className="center">
        <div className="button-tool-bar">
          <button className="big-button" onClick={this.props.playButton}>
            Play
          </button>
          <button className="big-button" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="big-button" onClick={this.props.clear}>
            Clear
          </button>
          <button className="big-button" onClick={this.props.slow}>
            Slow
          </button>
          <button className="big-button" onClick={this.props.fast}>
            Fast
          </button>
          <button className="big-button" onClick={this.props.seed}>
            Seed
          </button>
        </div>
        <DropdownButton
          className="float-button"
          title="Grid Size"
          id="size-menu"
          onSelect={this.handleSelect}
        >
          <Dropdown.Item className="float-button-item" eventKey="1">
            20x20
          </Dropdown.Item>
          <Dropdown.Item className="float-button-item" eventKey="2">
            35x35
          </Dropdown.Item>
          <Dropdown.Item className="float-button-item" eventKey="3">
            45x45
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
