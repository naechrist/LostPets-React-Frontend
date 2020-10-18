export function fetchAllPets() {
  //action creater produces an action obj - dispatch(actionObj), then dispatched to the reducer which will return our state based on that action
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/pets")
      .then((resp) => resp.json())
      .then((pets) =>
        dispatch({
          //saying go into the reducer w this action and update the store
          type: "FETCH_PETS",
          payload: pets,
        })
      );
  };
}
