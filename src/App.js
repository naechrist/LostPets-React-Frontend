import React from "react";
import "./App.css";
// import { connect } from "react-redux";
import PetTypesContainer from "./containers/PetTypesContainer";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <PetTypesContainer />
      </div>
    );
  }
}

export default App;
