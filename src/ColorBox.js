import React, { PureComponent } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.gatherIndividualColor = this.gatherIndividualColor.bind(this);
    this.copyInfo = this.copyInfo.bind(this);
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  gatherIndividualColor() {
    this.props.handleIndividualColor(this.props.individualColor);
  }
  copyInfo() {
    this.props.copy(this.props.background);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }
  render() {
    const currentClass = this.state.copied
      ? "copy-button copied"
      : "copy-button ";
    return (
      <div className="color" style={{ background: this.props.background }}>
        <CopyToClipboard
          text={this.props.background}
          onCopy={this.changeCopyState}
        >
          <div class="copy-container">
            <div className="box-content">{this.props.name}</div>
            <button className={currentClass}>
              {this.state.copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </CopyToClipboard>

        {this.props.showingAllColors && (
          <button className="see-more" onClick={this.gatherIndividualColor}>
            MORE
          </button>
        )}
      </div>
    );
  }
}

export default ColorBox;
