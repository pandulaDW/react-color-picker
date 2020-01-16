import React from "react";

import "./die.styles.scss";

class Die extends React.Component {
  numberMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"]
  ]);

  render() {
    const num1 = this.numberMap.get(this.props.die1);
    const num2 = this.numberMap.get(this.props.die2);
    return (
      <div className="Die">
        <div className="icon-left">
          <i className={`fas fa-dice-${num1}`}></i>
        </div>
        <div className="icon-right">
          <i className={`fas fa-dice-${num2}`}></i>
        </div>
      </div>
    );
  }
}

export default Die;
