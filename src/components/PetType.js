import React from "react";
// import { Redirect } from "react-router-dom";
import PetsContainer from "../containers/PetsContainer";

const PetType = (props) => {
  // debugger;
  // let pet_type = props.pet_types[props.match.params.id - 1];
  let pet_type = props.pet_types.filter(
    (pet_type) => pet_type.id == props.match.params.id
  )[0];

  return (
    <div>
      <h1>
        {/* {pet_type ? null : <Redirect to="/pet_types" />} */}
        {pet_type ? pet_type.name : null}
      </h1>
      <PetsContainer pet_type={pet_type} />
    </div>
  );
};

export default PetType;
