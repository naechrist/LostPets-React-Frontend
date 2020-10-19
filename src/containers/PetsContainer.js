import React, { Component } from "react";
import Pets from "../components/Pets";
import PetInput from "../components/PetInput";

export class PetsContainer extends Component {
  render() {
    return (
      <div>
        <PetInput pet_type={this.props.pet_type} />
        <br />
        <br />
        <br />
        <Pets pets={this.props.pet_type && this.props.pet_type.pets} />
      </div>
    );
  }
}

export default PetsContainer;
