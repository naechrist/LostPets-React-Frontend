export const addPet = (pet, petTypeId) => {
  return (dispatch) => {
    fetch(
      `https://lost-pets-rails-backend.herokuapp.com/api/v1/pet_types/${petTypeId}/pets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      }
    )
      .then((resp) => resp.json())
      .then((pet_type) => {
        return dispatch({
          type: "ADD_PET",
          payload: pet_type,
        });
      });
  };
};
