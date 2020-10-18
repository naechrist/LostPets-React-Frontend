import React from "react";
import { connect } from "react-redux";
import { fetchAllPets } from "../actions/fetchAllPets";
import { Route, Switch } from "react-router-dom";

class AllPets extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // debugger;
    this.props.fetchAllPets();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pets" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state from the redux store for inside this component
  return {
    pets: state.pets,
  };
};

export default connect(mapStateToProps, { fetchAllPets })(AllPets);
