// reducer is a function where you define different action types
// takes in a state, (prev state) as the first argument then an action obj as the second
//inside we update the store acording to the action type

export default function petTypeReducer(state = { pet_types: [] }, action) {
  //easier to keep state as an obj
  //   debugger;
  switch (action.type) {
    case "FETCH_PET_TYPES":
      return { pet_types: action.payload }; //action.payload is the array of obj
    default:
      return state;
  }
}
