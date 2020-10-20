import React, { Component } from "react";
import Pets from "../components/Pets";
import PetInput from "../components/PetInput";
import SearchPets from "../components/SearchPets";

export class PetsContainer extends Component {
  render() {
    return (
      <div>
        <PetInput pet_type={this.props.pet_type} />
        ______________________________________________________________________________________________
        <br />
        <br />
        <br />
        <SearchPets pets={this.props.pet_type && this.props.pet_type.pets} />
        <Pets pets={this.props.pet_type && this.props.pet_type.pets} />
      </div>
    );
  }
}

export default PetsContainer;
