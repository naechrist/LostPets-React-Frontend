export const addPetType = (data) => {
  return (dispatch) => {
    fetch("https://lost-pets-rails-backend.herokuapp.com/api/v1/pet_types", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((pet_type) =>
        dispatch({
          type: "ADD_PET_TYPE",
          payload: pet_type,
        })
      );
  };
};
