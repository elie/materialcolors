import React, { PureComponent } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends PureComponent {
  constructor(props) {
    super(props);
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
        <CopyToClipboard text={this.props.background}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>

        <div className="see-more">
          {this.props.showingAllColors && (
            <span onClick={this.gatherIndividualColor}>MORE</span>
          )}
        </div>
      </div>
    );
  }
}

export default ColorBox;
