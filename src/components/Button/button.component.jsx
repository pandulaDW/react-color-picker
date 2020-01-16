import React from "react";

import "./button.styles.scss";

class Button extends React.Component {
  render() {
    const buttonText = this.props.animate ? "Rolling..." : "Roll Dice!";
    return (
      <button className="Button" onClick={this.props.handleClick}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
