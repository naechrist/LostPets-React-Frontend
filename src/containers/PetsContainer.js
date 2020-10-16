import React, { Component } from "react";
import PetInput from "../components/PetInput";
import Pets from "../components/Pets";

export class PetsContainer extends Component {
  render() {
    return (
      <div>
        <PetInput />
        <Pets />
      </div>
    );
  }
}

export default PetsContainer;
