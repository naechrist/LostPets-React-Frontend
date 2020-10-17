// reducer is a function where you define different action types
// takes in a state, (prev state) as the first argument then an action obj as the second
//inside we update the store acording to the action type

export default function petTypeReducer(state = { pet_types: [] }, action) {
  //easier to keep state as an obj
  // debugger;
  switch (action.type) {
    case "FETCH_PET_TYPES":
      return { pet_types: action.payload }; //action.payload is the array of obj
    case "ADD_PET_TYPE":
      return { ...state, pet_types: [...state.pet_types, action.payload] };
    case "ADD_PET":
      let pet_types = state.pet_types.map((pet_type) => {
        if (pet_type.id === action.payload.id) {
          return action.payload;
        } else {
          return pet_type;
        }
      });
      return { ...state, pet_types: pet_types };
    case "DELETE_PET":
      debugger;
      let pet_typesTwo = state.pet_types.map((pet_type) => {
        if (pet_type.id === action.payload.id) {
          return action.payload;
        } else {
          return pet_type;
        }
      });
      return { ...state, pet_types: pet_typesTwo };
    default:
      return state;
  }
}
