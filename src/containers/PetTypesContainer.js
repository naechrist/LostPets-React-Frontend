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
          {/* chooses the first route that mathces the path */}
          <Route
            exact
            path="/"
            component={Home}
            render={(routerProps) => (
              <PetTypes {...routerProps} pet_types={this.props.pet_types} />
            )}
          />
          <Route path="/pet_types/new" component={PetTypeInput} />
          <Route
            path="/pet_types/:id/new"
            render={(routerProps) => (
              <PetInput {...routerProps} pet_types={this.props.pet_types} />
            )}
          />
          <Route
            path="/pet_types/:id"
            render={(routerProps) => (
              <PetType {...routerProps} pet_types={this.props.pet_types} />
            )}
          />

          <Route
            path="/pet_types"
            render={(routerProps) => (
              <PetTypes {...routerProps} pet_types={this.props.pet_types} />
            )}
          />
        </Switch>
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
