export const deletePet = (petId, petTypeId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/pet_types/${petTypeId}/pets/${petId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((pet_type) =>
        dispatch({
          type: "DELETE_PET",
          payload: pet_type,
        })
      );
  };
};
