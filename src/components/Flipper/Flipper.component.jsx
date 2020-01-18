import React from "react";

import Button from "../Button/button.component";
import Coin from "../Coin/coin.component";

import "./Flipper.styles.scss";

class Flipper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfHeads: 0,
      noOfTails: 0,
      currentFlip: "head"
    };
  }

  incrementOdds = flip => {
    const { noOfHeads, noOfTails } = { ...this.state };
    flip === "head"
      ? this.setState({ noOfHeads: noOfHeads + 1, currentFlip: flip })
      : this.setState({ noOfTails: noOfTails + 1, currentFlip: flip });
  };

  handleClick = () => {
    const flip = Math.floor(Math.random() * 2) ? "head" : "tail";
    this.incrementOdds(flip);
  };

  render() {
    return (
      <div className="Flipper">
        <Coin coinSide={this.state.currentFlip} />
        <Button handleClick={this.handleClick} />
        <h1>
          Out of {this.state.noOfHeads + this.state.noOfTails} flips, there have
          been {this.state.noOfHeads} heads and {this.state.noOfTails} tails
        </h1>
      </div>
    );
  }
}

export default Flipper;
