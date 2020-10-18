import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPetTypes } from "../actions/fetchPetTypes";
import { Route, Switch } from "react-router-dom";
import PetTypes from "../components/PetTypes";
import PetTypeInput from "../components/PetTypeInput";
import PetType from "../components/PetType";
import Home from "../components/Home";

class NavBar extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPetTypes();
  // }
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pet_types">Types of Pet</NavLink>
        {/* <NavLink
          to="/pet_types/:id"
          render={(routerProps) => (
            <PetType {...routerProps} pet_types={this.props.pet_types} />
          )}
        >
          Click here to add a pet you found
        </NavLink> */}
        {/* <NavLink to="/" */}
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   //state from the redux store for inside this component
//   return {
//     pet_types: state.pet_types,
//   };
// };

// export default connect(mapStateToProps, { fetchPetTypes })(NavBar);
// //connect calls dispatch mapState (first argument) to c it in the store & mapDispatch to update it (second argument)
export default NavBar;
