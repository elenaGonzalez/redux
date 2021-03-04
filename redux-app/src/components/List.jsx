import { useState } from "react"
import './List.css'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import { addAmigo, deleteAmigo} from './Redux/actions/amigosActions'

const List = ({amigos, addAmigo, deleteAmigo }) => {
  
  let [amigo, setAmigo] = useState({
    id : "",
    name :"",
    username: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(amigo)
 
    addAmigo(amigo)
    setAmigo({
      id : "",
      name :"",
      username: "",
      email: ""
    });

  };


  const handleChange = (e) => {
    setAmigo({
      ...amigo,
      [e.target.name]: e.target.value,
    });
  };


  const eliminar = (ami) => {
    console.log(ami)
    deleteAmigo(ami)
    }


  return (
    <>
      <h3>Listado de Amigos</h3>

      <table className="tabla">
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Nombre Usuario</th>
        <th>Email</th>
      </tr>
        {!amigos ? (
          <h3>Sin datos...</h3>
        ) : (
            amigos.map((integrante, i) => {
            return (
              <tr>
              <td key={i}>{integrante.id}</td>
              <td>{integrante.name}</td>
              <td>{integrante.username}</td>
              <td>{integrante.email}</td>
               <td>
                 <button type="submit" className ="botonEliminar" onClick={()=>eliminar(integrante)}>Eliminar</button>
                </td>
              </tr>
            );
          })
        )}
      </table>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="Ingrese id" onChange={handleChange} value={amigo.id}></input>
        <input name="name" placeholder="Ingrese name" onChange={handleChange} value={amigo.name}></input>
        <input name="username" placeholder="Ingrese username" onChange={handleChange} value={amigo.username}></input>
        <input name="email" placeholder="Ingrese email" onChange={handleChange} value={amigo.email}></input>
        <button type="submit" className="boton">Agregar</button>
        <Link to="/total/amigos" >Total de Amigos</Link>
      </form>
    </>
  );
};

const mapStateToProps = (state) =>({
  amigos: state.amigos
})

const mapDispatchToProps = (dispatch)=>({
  addAmigo: (ami) => dispatch(addAmigo(ami)),
  deleteAmigo: (ami)=>dispatch(deleteAmigo(ami))
})
export default connect(mapStateToProps, mapDispatchToProps)(List);
