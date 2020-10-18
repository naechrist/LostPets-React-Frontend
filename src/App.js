import React from "react";
import "./App.css";
import PetTypesContainer from "./containers/PetTypesContainer";
import NavBar from "./components/NavBar";
// import AllPetsContainer from "./containers/AllPetsContainer";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <br />
        <PetTypesContainer />
      </div>
    );
  }
}

export default App;
