import React from "react";

import "./ColorBox.styles.scss";

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // not gonna create a bunch of binded functions
  handleRemove() {
    this.props.handleClick(this.props.colorId);
  }

  render() {
    const [red, green, blue] = [...this.props.color];
    return (
      <div
        className="ColorBox"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
        onClick={this.handleRemove}
      />
    );
  }
}

export default ColorBox;
