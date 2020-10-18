import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPetTypes();
  // }
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pet_types" style={{ textDecoration: "none" }}>
            Type of Pets
          </NavLink>
        </li>
      </ul>
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
