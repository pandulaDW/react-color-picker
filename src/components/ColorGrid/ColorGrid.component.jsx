import React from "react";

import ColorBox from "../ColorBox/ColorBox.component";

import "./ColorGrid.styles.scss";

class ColorGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.setInitialState();
    this.handleClick = this.handleClick.bind(this);
  }

  // Create a random color using RGB
  randomColorPicker() {
    return new Array(3).fill(1).map(() => Math.floor(Math.random() * 256));
  }

  // Create the initial state object with array index as key and color as value
  setInitialState() {
    const initialColors = new Array(18)
      .fill(1)
      .map(() => this.randomColorPicker());
    const colorMap = new Map(initialColors.map((el, id) => [`color${id}`, el]));
    return Object.fromEntries(colorMap);
  }

  // A better solution is implement in the child component
  handleClick(id) {
    const stateObj = {};
    stateObj[`color${id}`] = this.randomColorPicker();
    console.log(stateObj);
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="ColorGrid">
        {new Array(18).fill(1).map((el, id) => (
          <ColorBox
            color={this.state[`color${id}`]}
            key={id}
            colorId={id}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default ColorGrid;
