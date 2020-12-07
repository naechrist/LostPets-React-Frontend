import React from "react";
import { connect } from "react-redux";
import { fetchPetTypes } from "../actions/fetchPetTypes";
import { Route, Switch } from "react-router-dom";
import PetTypes from "../components/PetTypes";
import PetTypeInput from "../components/PetTypeInput";
import PetType from "../components/PetType";
import Home from "../components/Home";
import PetInput from "../components/PetInput";

class PetTypesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPetTypes();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pet_types/new" component={PetTypeInput} />
          <Route path="/pet_types/:id/new" component={PetInput} />
          <Route
            path="/pet_types/:id"
            render={(routerProps) => (
              <PetType {...routerProps} pet_types={this.props.pet_types} />
            )}
          />
          <Route
            path="/pet_types"
            component={() => <PetTypes pet_types={this.props.pet_types} />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pet_types: state.pet_types,
  };
};

export default connect(mapStateToProps, { fetchPetTypes })(PetTypesContainer);
