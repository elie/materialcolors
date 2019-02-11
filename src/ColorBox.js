import React, { PureComponent } from "react";
import './ColorBox.css'

class ColorBox extends PureComponent {
  constructor(props){
    super(props)
    this.gatherIndividualColor = this.gatherIndividualColor.bind(this)
  }
  gatherIndividualColor(){
    this.props.handleIndividualColor(this.props.individualColor)
  }
  render(){
    return(
      <div className="color" data-current={this.props.currentValue} style={{background: this.props.background}}>
        <div className="copy-area" >
          <span className="label">{this.props.name} </span>
          <span className="copy">COPY</span>
        </div>

        {this.props.showingAllColors &&
          <span onClick={this.gatherIndividualColor} className="more">MORE</span>
        }


      </div>
    )
  }
}

export default ColorBox