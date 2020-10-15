import React, { Component } from "react";
import { connect } from "react-redux"; //to connect to the store
import { addPetType } from "../actions/addPetType";

export class PetTypeInput extends Component {
  state = { name: "" };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPetType(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Species not listed below? </label>
          <input
            type="text"
            placeholder="Add Species"
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPetType })(PetTypeInput);
// null as the mapState argument because I dont need info from the store i am just updating or sending info to the store
//can do {addPetType} b/c of thunk
