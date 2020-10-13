import React from "react";
import "./App.css";
import { connect } from "react-redux";
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

export default connect()(App);
//connect calls dispatch null b/c we dont need to c it in the store just to update it (which is the second argument)
