import { ALL_AMIGOS, ADD_AMIGO, DELETE_AMIGO} from "../actions/constants";

const initialState = {
  amigos: [],

};

export default function amigosReducers(state = initialState, action) {
  switch (action.type) {
  case ALL_AMIGOS:
    return{
      amigos: action.payload
    }
   case ADD_AMIGO:{
     return{
       amigos: [...state.amigos, action.payload]
     }
   } 
   case DELETE_AMIGO:{
     return{
       amigos: state.amigos.filter(f => f !== action.payload)
     }
   }
    default:
      return state
  }
}


