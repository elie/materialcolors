import React, { Component } from "react";
import "./CopyOverlay.css";

class CopyOverlay extends Component {
  render() {
    return (
      <div
        className="overlay"
        style={{ background: this.props.backgroundColor }}
      >
        <div className="overlay-text">Copied!</div>
      </div>
    );
  }
}

export default CopyOverlay;
