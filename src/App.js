import React from "react";

import "./App.css";
import Die from "./components/Die/die.component";
import Button from "./components/Button/button.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNum1: 1,
      diceNum2: 5,
      animate: false
    };
  }

  handleClick = () => {
    // prevent button pressing during animation
    if (this.state.animate) return;
    const randIdx1 = Math.floor(Math.random() * 6) + 1;
    const randIdx2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ animate: true });

    setTimeout(() => {
      this.setState({ diceNum1: randIdx1, diceNum2: randIdx2, animate: false });
    }, 1500);
  };

  render() {
    const { diceNum1, diceNum2, animate } = { ...this.state };
    return (
      <div className="App">
        <Die die1={diceNum1} die2={diceNum2} animate={animate} />
        <Button handleClick={this.handleClick} animate={animate} />
      </div>
    );
  }
}

export default App;
