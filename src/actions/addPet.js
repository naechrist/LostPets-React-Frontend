export const addPet = (pet, petTypeId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/pet_types/${petTypeId}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    })
      .then((resp) => resp.json())
      .then((pet_type) =>
        dispatch({
          type: "ADD_PET",
          payload: pet_type,
        })
      );
  };
};
