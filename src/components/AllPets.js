import React, { Component } from "react";
import Pets from "../components/Pets";

export class AllPets extends Component {
  render() {
    // debugger;
    return (
      <div>
        <Pets pets={this.props.pet_types} />
      </div>
    );
  }
}

export default AllPets;
