import React, { Component } from 'react';
import 'normalize.css/normalize.css'
import '../../styles/style.css';
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker"
import Choose4U from "../Choose4U/Choose4U"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      addId: "",
      leftActive: false,
      rightActive: false
    }
  }
  hoverLeft = () => {this.setState({addId: "hover-left"})}
  hoverRight = () => {this.setState({addId: "hover-right"})}
  hoverOut = () => {this.setState({addId: ""})}
  activateLeft = () => {this.setState({leftActive: !this.state.leftActive})}
  activateRight = () => {this.setState({rightActive: !this.state.rightActive})}
  renderSplit = () => {
    return (
      <div className="wrapper" id={this.state.addId}>
        <div className="split left" onMouseEnter={this.hoverLeft} onMouseLeave={this.hoverOut}>
          <h1 className="hero-title">Recipes</h1>
          <a className="button" onClick={this.activateLeft}>Start</a>
        </div>
        <div className="split right" onMouseEnter={this.hoverRight} onMouseLeave={this.hoverOut}>
          <h1 className="hero-title">Expense Tracker</h1>
          <a className="button" onClick={this.activateRight}>Start</a>
        </div>
      </div>
    )
  }
  render() {
    let whatToRender;
    if (this.state.leftActive && !this.state.rightActive) {
      whatToRender = <Choose4U activateLeft={this.activateLeft} />
    } else if (!this.state.leftActive && this.state.rightActive) {
      whatToRender = <ExpenseTracker activateRight={this.activateRight} />
    } else {
      whatToRender = this.renderSplit()
    }
    return (
      <div>
      {whatToRender}
      {console.log(this.state)}
      </div>
    )
  }
}

export default Home;

// {this.state.areaActive? <Choose4U makeAreaActive={this.makeAreaActive} /> : this.renderSplit()}
// {this.state.activateRight? <Choose4U makeAreaActive={this.makeAreaActive} /> : this.renderSplit()}
