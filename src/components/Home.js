import React from "react";
import { NavLink } from "react-router-dom";
import PetTypes from "./PetTypes";

const Home = (props) => {
  //   debugger;
  return (
    <div>
      <h2>There's no place like home.</h2>
      <h1>Lost & Found: Pet Edition</h1>
    </div>
  );
};

export default Home;

{
  /* <NavLink to={`/pet_types/${pet_type.id}`}>{pet_type.name}</NavLink>; */
}
