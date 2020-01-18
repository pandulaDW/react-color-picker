import React from "react";

import "./ColorBox.styles.scss";

class ColorBox extends React.Component {
  render() {
    const [red, green, blue] = [...this.props.color];
    return (
      <div
        className="ColorBox"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default ColorBox;
