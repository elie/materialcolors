import React, { PureComponent } from "react";
import "./CopyOverlay.css";

class CopyOverlay extends PureComponent {
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
