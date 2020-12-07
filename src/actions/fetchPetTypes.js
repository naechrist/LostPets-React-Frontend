export function fetchPetTypes() {
  return (dispatch) => {
    fetch("https://lost-pets-rails-backend.herokuapp.com/api/v1/pet_types")
      .then((resp) => resp.json())
      .then((pet_types) =>
        dispatch({
          type: "FETCH_PET_TYPES",
          payload: pet_types,
        })
      );
  };
}
