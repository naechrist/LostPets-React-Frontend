export const deletePet = (petId, petTypeId) => {
  return (dispatch) => {
    fetch(
      `https://lost-pets-rails-backend.herokuapp.com/api/v1/pet_types/${petTypeId}/pets/${petId}`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => resp.json())
      .then((pet_type) =>
        dispatch({
          type: "DELETE_PET",
          payload: pet_type,
        })
      );
  };
};
