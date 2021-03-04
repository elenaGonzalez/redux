import {ALL_AMIGOS, ADD_AMIGO, DELETE_AMIGO} from "./constants";

export function allAmigos() {
  return function(dispatch){
    return fetch('https://jsonplaceholder.typicode.com/users')
    //return fetch('http://localhost:3001/usuarios/all')
    .then(response => response.json())
    .then(data => 
      dispatch({type: ALL_AMIGOS, payload: data})
      )
    .catch(err=> console.info(err))
  }
}

export function addAmigo(amigo){
  return function(dispatch){
    return dispatch({type: ADD_AMIGO, payload: amigo})
  }
}

export function deleteAmigo(amigo){
  return function(dispatch){
    return dispatch({type: DELETE_AMIGO, payload: amigo})
  }
}



