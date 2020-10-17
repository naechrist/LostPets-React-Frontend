import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePet } from "../actions/deletePet";
//functional comonents bc we r getting props from the mom

const Pets = (props) => {
  console.log(props.pets);

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.pet_type_id);
  };

  return (
    <div>
      {props.pets &&
        props.pets.map((pet) => (
          <div key={pet.id}>
            Location: {pet.location} <br /> Name: {pet.name} <br /> About:{" "}
            {pet.description} <br /> Contact Phone Number: {pet.contact_number}
            <br />
            <button onClick={() => handleDelete(pet)}>Found!</button>
            <br />
            Only hit Found when the animal is back home!
            <br />
          </div>
        ))}
    </div>
  );
};
export default connect(null, { deletePet })(Pets);
