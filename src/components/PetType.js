import React from "react";
import PetsContainer from "../containers/PetsContainer";

const PetType = (props) => {
  // debugger;
  let pet_type = props.pet_types.filter(
    (pet_type) => pet_type.id == props.match.params.id //id from the type match from the backend params and puts that to the url
  )[0];

  return (
    <div>
      <h1>{pet_type ? pet_type.name : null}</h1>
      <PetsContainer pet_type={pet_type} />
    </div>
  );
};

export default PetType;
