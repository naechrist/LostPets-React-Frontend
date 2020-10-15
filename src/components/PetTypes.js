//functional b/c it just renders a list from the PetTypesContainer through props
import { Route, Link } from "react-router-dom";
import React from "react";
import PetType from "./PetType";

const PetTypes = (props) => {
  //   console.log(props);
  return (
    <div>
      {props.pet_types.map((pet_type) => (
        <div key={pet_type.id}>
          <Link to={`/pet_types/${pet_type.id}`}>{pet_type.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default PetTypes;
