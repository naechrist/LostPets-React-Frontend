import React from "react";

const PetType = (props) => {
  console.log(props);
  return <li>{props.pet_type.name}</li>;
};
export default PetType;
