import React, { Component } from "react";
import PetInput from "../components/PetInput";
import Pets from "../components/Pets";

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
