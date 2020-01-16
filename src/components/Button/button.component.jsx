import React from "react";

import "./button.styles.scss";

class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.handleClick}>
        Roll Dice!
      </button>
    );
  }
}

export default Button;
