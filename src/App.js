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
      individualColors: []
    };
    this.changeColors = this.changeColors.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.showIndividualColor = this.showIndividualColor.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }
  navigateBack(){
    this.setState({
      showingAllColors: true,
      individualColors: []
    });
  }
  changeColors(val) {
    this.setState({
      level: val * 10
    });
  }
  changeFormat(to) {
    debugger
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
      individualColors
    });
  }
  render() {
    const boxesToDisplay = this.state.showingAllColors
      ? this.state.colors[this.state.level]
      : this.state.individualColors;
    const colorBoxes = boxesToDisplay.map(color => (
      <ColorBox
        handleIndividualColor={this.showIndividualColor}
        level={this.state.level}
        individualColor={color.palette_id}
        showingAllColors={this.state.showingAllColors}
        key={color.color}
        background={color.color}
        name={color.name}
      />
    ));

    return (
      <div>
        <NavBar handleFormatChange={this.changeFormat} isShowingAllColors={this.state.showingAllColors} handleColorVal={this.changeColors} />
        <div className="App colors">{colorBoxes}</div>
        {!this.state.showingAllColors && <span className="more" onClick={this.navigateBack}>GO BACK</span>}
      </div>
    );
  }
}

export default App;
