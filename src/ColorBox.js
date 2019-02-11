import React, { PureComponent } from "react";
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';


class ColorBox extends PureComponent {
  constructor(props){
    super(props)
    this.gatherIndividualColor = this.gatherIndividualColor.bind(this)
    this.copyInfo = this.copyInfo.bind(this)
  }
  gatherIndividualColor(){
    this.props.handleIndividualColor(this.props.individualColor)
  }
  copyInfo() {
    this.props.copy(this.props.background)
  }
  render(){
    return(
      <div className="color"  style={{background: this.props.background}}>
        <div className="copy-area" >
          <span className="label">{this.props.name} </span>
          <span onClick={this.copyInfo} className="more">COPY</span>
        </div>

        <CopyToClipboard text={this.props.background}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>
        

        {this.props.showingAllColors &&
          <span onClick={this.gatherIndividualColor} className="more">MORE</span>
        }


      </div>
    )
  }
}

export default ColorBox