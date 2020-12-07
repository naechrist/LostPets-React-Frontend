import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePet } from "../actions/deletePet";

export class SearchPets extends Component {
  constructor() {
    super();
    this.state = { search: null };
  }
  handleDelete = (pet) => {
    this.props.deletePet(pet.id, pet.pet_type_id);
  };

  handleChange = (e) => {
    e.preventDefault();
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.pets;
      newList = currentList.filter((pet) => {
        const lc = [
          pet.name.toString().toLowerCase(),
          pet.location.toString().toLowerCase(),
          pet.description.toString().toLowerCase(),
        ];
        const filter = e.target.value.toLowerCase();
        return lc.toString().includes(filter);
      });
    }
    this.setState({ filtered: newList });
  };

  render() {
    return (
      <div>
        {this.props && (
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        )}
        <br />
        {this.state.filtered &&
          this.state.filtered.map((pet) => (
            <section key={pet.id}>
              Location: {pet.location} <br /> Name: {pet.name} <br /> About:{" "}
              {pet.description} <br /> Contact Phone Number:{" "}
              {pet.contact_number}
              <br />
              <br />
              <button onClick={() => this.handleDelete(pet)}>Found!</button>
              <br />
              Only hit Found when {pet.name} is back home!
            </section>
          ))}
        <br />
        ______________________________________________________________________________________________
        <br />
        All Pets Below
        <br />
        <br />
      </div>
    );
  }
}

export default connect(null, { deletePet })(SearchPets);
