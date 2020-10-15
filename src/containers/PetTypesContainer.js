import React from "react";
import PetTypes from "../components/PetTypes";
import PetTypeInput from "../components/PetTypeInput";
import { connect } from "react-redux";
import { fetchPetTypes } from "../actions/fetchPetTypes";
import { Route } from "react-router-dom";
import PetType from "../components/PetType";

class PetTypesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPetTypes();
  }

  render() {
    return (
      <div>
        <Route exact path="/pet_types/new" component={PetTypeInput} />
        <Route
          exact
          path="/pet_types"
          render={() => <PetTypes pet_types={this.props.pet_types} />}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state from the redux store for inside this component
  return {
    pet_types: state.pet_types,
  };
};

export default connect(mapStateToProps, { fetchPetTypes })(PetTypesContainer);
//connect calls dispatch mapState (first argument) to c it in the store & mapDispatch to update it (second argument)
