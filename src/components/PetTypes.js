//functional b/c it just renders a list from the PetTypesContainer through props

import React from "react";
import PetType from "./PetType";

const PetTypes = (props) => {
  //   console.log(props);
  return (
    <div>
      {props.pet_types.map((pet_type) => (
        <div key={pet_type.id}>
          <PetType pet_type={pet_type} />
        </div>
      ))}
    </div>
  );
};
export default PetTypes;
