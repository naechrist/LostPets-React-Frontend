//functional b/c it just renders a list from the PetTypesContainer through props

import React from "react";

const PetTypes = (props) => {
  //   console.log(props);
  return (
    <div>
      {props.pet_types.map((pet_type) => (
        <li key={pet_type.id}>{pet_type.name}</li>
      ))}
    </div>
  );
};
export default PetTypes;
