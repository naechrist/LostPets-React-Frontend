import React, { Component } from "react";
import { connect } from "react-redux";

export class PetInput extends Component {
  state = {
    description: "",
    name: "",
    location: "",
    contact_number: "",
  };
  render() {
    // console.log(this);

    return (
      <div>
        <form>
          <label>Found a Lost Friend? Add them below to be Found.</label>
          <br />
          <br />
          <label>Write a detailed description: </label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default connect()(PetInput);
