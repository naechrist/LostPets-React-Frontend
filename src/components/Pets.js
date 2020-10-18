import React from "react";
import { connect } from "react-redux";
import { deletePet } from "../actions/deletePet";
// import { PetEdit } from "./PetEdit";
import { NavLink } from "react-router-dom";
import PetInput from "./PetInput";

//functional comonents bc we r getting props from the mom

const Pets = (props) => {
  console.log(props.pets);

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.pet_type_id);
  };
  // debugger;
  return (
    <div>
      {props.pets && (
        <NavLink to={`/pet_types/${props.pets[0].pet_type_id}/new`}>
          newnew
        </NavLink>
      )}
      {props.pets &&
        props.pets.map((pet) => (
          <section key={pet.id}>
            Location: {pet.location} <br /> Name: {pet.name} <br /> About:{" "}
            {pet.description} <br /> Contact Phone Number: {pet.contact_number}
            <br />
            <NavLink
              to={`/pet_types/${pet.pet_type_id}/pets/${pet.id}`}
              onClick={props.PetEdit}
              // component={PetEdit}
            >
              Click here to edit
            </NavLink>
            <br />
            <button onClick={() => handleDelete(pet)}>Found!</button>
            <br />
            Only hit Found when the animal is back home!
            <br />
            <br />
            <br />
          </section>
        ))}
    </div>
  );
};
export default connect(null, { deletePet })(Pets);
