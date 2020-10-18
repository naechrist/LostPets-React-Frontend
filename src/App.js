import React from "react";
import "./App.css";
// import { connect } from "react-redux";
import PetTypesContainer from "./containers/PetTypesContainer";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import PetsContainer from "./containers/PetsContainer";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <NavBar />
        <PetTypesContainer />
      </div>
    );
  }
}

export default App;
