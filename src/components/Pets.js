import React, { Component } from "react";
//functional comonents bc we r getting props from the mom

const Pets = (props) => {
  console.log(props.pets);
  return (
    <div>
      {props.pets &&
        props.pets.map((pet) => (
          <div key={pet.id}>
            Location: {pet.location} <br /> Name: {pet.name} <br /> About:{" "}
            {pet.description}
            <br />
            <br />
            <br />
          </div>
        ))}
    </div>
  );
};
export default Pets;
