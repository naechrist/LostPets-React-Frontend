import React from "react";
import { connect } from "react-redux";
import { deletePet } from "../actions/deletePet";
import FlagPet from "./FlagPet";

const Pets = (props) => {
  console.log(props.pets);

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.pet_type_id);
  };
  return (
    <nav>
      {props.pets &&
        props.pets.map((pet) => (
          <section key={pet.id}>
            Location: {pet.location} <br /> Name: {pet.name} <br /> About:{" "}
            {pet.description} <br /> Contact Phone Number: {pet.contact_number}
            <br />
            <br />
            <button onClick={() => handleDelete(pet)}>Found!</button>
            <br />
            Only hit Found when {pet.name} is back home!
            <br />
            <br />
            <br />
            <FlagPet />
          </section>
        ))}
    </nav>
  );
};
export default connect(null, { deletePet })(Pets);
