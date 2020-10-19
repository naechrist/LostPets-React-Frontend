export const addPetType = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/pet_types", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data), //from obj to string
    })
      .then((resp) => resp.json())
      .then((pet_type) =>
        dispatch({
          //saying go into the reducer w this action and update the store
          type: "ADD_PET_TYPE",
          payload: pet_type,
        })
      );
  };
};
