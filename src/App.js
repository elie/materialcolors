import React, { Component } from "react";
import "./App.css";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import colors from "./colors";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors,
      level: 500,
      showingAllColors: true,
      currentFormat: "hex"
    };
    this.changeColors = this.changeColors.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.showIndividualColor = this.showIndividualColor.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }
  navigateBack() {
    this.setState({
      showingAllColors: true,
      colors
    });
  }
  changeColors(val) {
    this.setState({
      level: val * 10
    });
  }
  changeFormat(to) {
    this.setState({
      currentFormat: to === "hex" ? "rgb" : "hex"
    });
  }
  showIndividualColor(colorToFilterBy) {
    let individualColors = [];
    let colors = this.state.colors;
    for (let key in colors) {
      individualColors = individualColors.concat(
        colors[key].filter(color => color.palette_id === colorToFilterBy)
      );
    }
    this.setState({
      showingAllColors: false,
      colors: { [this.state.level]: individualColors }
    });
  }
  render() {
    const colorBoxes = this.state.colors[this.state.level].map(color => (
      <ColorBox
        handleIndividualColor={this.showIndividualColor}
        level={this.state.level}
        individualColor={color.palette_id}
        showingAllColors={this.state.showingAllColors}
        key={color.name}
        background={color[this.state.currentFormat]}
        name={color.name}
      />
    ));

    return (
      <div>
        <NavBar
          level={this.state.level}
          handleFormatChange={this.changeFormat}
          isShowingAllColors={this.state.showingAllColors}
          handleColorVal={this.changeColors}
        />
        <div className="App colors">{colorBoxes}</div>
        <div>
          {!this.state.showingAllColors && (
            <div className="color back">
              <span className="go-back" onClick={this.navigateBack}>
                GO BACK
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
