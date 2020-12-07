import { NavLink } from "react-router-dom";
import React from "react";
import PetTypeInput from "./PetTypeInput";
import SearchPetType from "./SearchPetType";

const PetTypes = (props) => {
  const petTypes = props.pet_types;
  console.log(petTypes);
  return (
    <h1>
      <PetTypeInput />
      ______________________________________________________________________________________________
      <br />
      <SearchPetType pets={props.pet_types} />
      ______________________________________________________________________________________________
      <br />
      {props.pet_types &&
        props.pet_types
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((pet_type) => (
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
