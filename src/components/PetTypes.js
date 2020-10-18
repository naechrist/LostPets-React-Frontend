//functional b/c it just renders a list from the PetTypesContainer through props
import { NavLink } from "react-router-dom";
import React from "react";
import PetTypeInput from "./PetTypeInput";

const PetTypes = (props) => {
  console.log(props);
  // debugger;
  return (
    <h1>
      <PetTypeInput />
      <br />
      {props.pet_types &&
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
