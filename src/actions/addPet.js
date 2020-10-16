export const addPet = (pet, petTypeId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/pet_types/${petTypeId}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    })
      .then((resp) => resp.json())
      .then((pet) =>
        dispatch({
          type: "ADD_PET",
          payload: pet,
        })
      );
  };
};
