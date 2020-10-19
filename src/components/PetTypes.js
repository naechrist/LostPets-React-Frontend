//functional b/c it just renders a list from the PetTypesContainer through props
import { NavLink } from "react-router-dom";
import React from "react";
import PetTypeInput from "./PetTypeInput";

const PetTypes = (props) => {
  //props coming from PetTypesContainer
  return (
    <h1>
      <PetTypeInput />
      <br />
      {props.pet_types && //makes sure there is one first then map through them
        props.pet_types.map((pet_type) => (
          <div key={pet_type.id}>
            <NavLink
              to={`/pet_types/${pet_type.id}`}
              style={{ textDecoration: "none" }}
            >
              {pet_type.name}
            </NavLink>
            <br />
            <br />
          </div>
        ))}
    </h1>
  );
};
export default PetTypes;
