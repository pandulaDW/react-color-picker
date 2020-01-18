import React from "react";

import "./App.scss";
import ColorGrid from "./components/ColorGrid/ColorGrid.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="text">Color Picker</h1>
        <ColorGrid />
      </div>
    );
  }
}

export default App;
