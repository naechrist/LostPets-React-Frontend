import React from "react";
import PetTypes from "../components/PetTypes";
import PetTypeInput from "../components/PetTypeInput";
import { connect } from "react-redux";
import { fetchPetTypes } from "../actions/fetchPetTypes";

class PetTypesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPetTypes();
  }

  render() {
    return (
      <div>
        <PetTypeInput />
        <PetTypes />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state from the redux store
  return {
    pet_types: state.pet_types,
  };
};

export default connect(mapStateToProps, { fetchPetTypes })(PetTypesContainer);
//connect calls dispatch mapState (first argument) to c it in the store & mapDispatch to update it (second argument)
