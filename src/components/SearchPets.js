import React, { Component } from "react";
import Pets from "../components/Pets";

export class SearchPets extends Component {
  constructor() {
    super();
    this.state = { search: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
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
    } else {
      newList = [this.props.pets];
    }
    this.setState({ filtered: newList });
    // debugger;
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

export default SearchPets;
