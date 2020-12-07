import React from "react";
import PetsContainer from "../containers/PetsContainer";

const PetType = (props) => {
  let pet_type = props.pet_types.filter(
    (pet_type) => pet_type.id === props.match.params.id
  )[0];

  return (
    <div>
      <h1>{pet_type ? pet_type.name : null}</h1>
      <PetsContainer pet_type={pet_type} />
    </div>
  );
};

export default PetType;
