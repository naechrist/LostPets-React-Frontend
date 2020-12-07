import React, { Component } from "react";

export class FlagPet extends Component {
  state = {
    flagged: false,
  };

  handleChange = () => {
    let change = this.state.flagged ? false : true;
    this.setState({
      flagged: change,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>
          Flagged: {this.state.flagged ? "yes" : "no"}
        </button>
      </div>
    );
  }
}

export default FlagPet;
