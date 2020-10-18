import React, { Component } from "react";
import { connect } from "react-redux";
import { addPet } from "../actions/addPet";

export class PetInput extends Component {
  // debugger;
  state = {
    description: "",
    name: "",
    location: "",
    contact_number: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    // debugger;
    event.preventDefault();
    this.props.addPet(this.state, this.props.pet_type.id);
    this.setState({
      description: "",
      name: "",
      location: "",
      contact_number: "",
    });
  };

  render() {
    // console.log(this);

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Found a Lost Friend? Add them below...</label>
          <br />
          <br />
          <label>Write a detailed description of the animal: </label>
          <textarea
            name="description"
            placeholder="Looks like. Acts like? Injured?"
            value={this.state.description}
            onChange={this.handleOnChange}
          ></textarea>
          <br />
          <br />
          <textarea
            type="text"
            name="name"
            placeholder="Write name if you know it here."
            value={this.state.name}
            onChange={this.handleOnChange}
          ></textarea>
          <br />
          <br />
          <label>Where are you Location? </label>
          <br />
          <textarea
            cols="30"
            rows="4"
            type="text"
            name="location"
            placeholder="Write as many details as possible.   Ex. Louisville, Kentucky in MiddleTown by the Taco Bell on 3rd Street."
            value={this.state.location}
            onChange={this.handleOnChange}
          ></textarea>
          <br />
          <br />
          <input
            cols="30"
            rows="4"
            type="text"
            name="contact_number"
            placeholder="Contact Number"
            value={this.state.contact_number}
            onChange={this.handleOnChange}
          ></input>
          <br />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPet })(PetInput);
