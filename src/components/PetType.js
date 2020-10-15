import React from "react";

const PetType = (props) => {
  console.log(props);

  let pet_type = props.pet_types[props.match.params.id];

  return <li>{pet_type ? pet_type.name : null}</li>;
};
export default PetType;
