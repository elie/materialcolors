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
  }
  gatherIndividualColor() {
    this.props.handleIndividualColor(this.props.individualColor);
  }
  copyInfo() {
    this.props.copy(this.props.background);
  }
  render() {
    return (
      <div className="color" style={{ background: this.props.background }}>
        <div className="box-content">{this.props.name}</div>
        <CopyToClipboard
          text={this.props.background}
          onCopy={() =>
            this.setState({ copied: true }, () => {
              setTimeout(() => this.setState({ copied: false }), 1000);
            })
          }
        >
          <button className="copy-button">
            {this.state.copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>

        {this.props.showingAllColors && (
          <div className="see-more">
            <span onClick={this.gatherIndividualColor}>MORE</span>
          </div>
        )}
      </div>
    );
  }
}

export default ColorBox;
