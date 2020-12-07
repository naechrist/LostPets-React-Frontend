export default function petTypeReducer(state = { pet_types: [] }, action) {
  switch (action.type) {
    case "FETCH_PET_TYPES":
      return { pet_types: action.payload };
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
