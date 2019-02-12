import "rc-slider/assets/index.css";

import React, { Component } from "react";
import Slider from "rc-slider";
import "./NavBar.css"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 50,
      value: "HEX - #1234EF"
    };
    this.changeColor = this.changeColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  changeColor(val) {
    this.props.handleColorVal(val);
  }
  handleChange(event) {
    const changeValue = event.target.value.includes("#") ? "rgb" : "hex";
    this.props.handleFormatChange(changeValue);
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <header>
        <div className="logo">
          Material Color Picker
        </div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="HEX - #1234EF">HEX - #1234EF</option>
            <option value="RGB - (255,255,255)">RGB - (255,255,255)</option>
            RGB - (12,12,12,1.0)
          </select>
          {this.props.isShowingAllColors && (
            <div className="slider">
              <Slider
                step={10}
                defaultValue={50}
                min={10}
                max={90}
                onAfterChange={this.changeColor}
              />
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default NavBar;
