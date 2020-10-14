import React, { Component } from "react";

export class PetTypeInput extends Component {
  state = { name: "" };

  handleOnChange = (event) => {
    // debugger;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Species not listed below? </label>
          <input
            type="text"
            placeholder="Add Species"
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default PetTypeInput;
