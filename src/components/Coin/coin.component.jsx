import React from "react";

import "./coin.styles.scss";

class Coin extends React.Component {
  render() {
    const coinImage =
      this.props.coinSide === "head"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
        : "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg";
    return (
      <div className="Coin">
        <img src={coinImage} alt="" />
      </div>
    );
  }
}

export default Coin;
