import React, { Component } from "react";
//functional comonents bc we r getting props from the mom

const Pets = (props) => {
  console.log(props.pets);
  return (
    <div>
      {props.pets &&
        props.pets.map((pet) => (
          <div key={pet.id}>
            {pet.location} <br /> {pet.name} <br /> {pet.description}
          </div>
        ))}
    </div>
  );
};
export default Pets;
