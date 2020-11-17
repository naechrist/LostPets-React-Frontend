import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SearchPetType extends Component {
  constructor() {
    super();
    this.state = { search: null };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault();
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.pets;
      newList = currentList.filter((pet_type) => {
        const lc = pet_type.name.toString().toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.toString().includes(filter);
      });
    }
    this.setState({ filtered: newList });
  };
  render() {
    console.log(this.props.pets);
    return (
      <div>
        {this.props.pets && (
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        )}
        <br />
        {this.state.filtered &&
          this.state.filtered.map((pet_type) => (
            <div key={pet_type.id}>
              <NavLink
                to={`/pet_types/${pet_type.id}`}
                style={{ textDecoration: "none" }}
              >
                {pet_type.name}
              </NavLink>
            </div>
          ))}
      </div>
    );
  }
}

export default SearchPetType;
