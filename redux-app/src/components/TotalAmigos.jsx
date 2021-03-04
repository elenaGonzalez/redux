import { Link } from "react-router-dom"
import './List.css'
import {useSelector} from 'react-redux'

const TotalAmigos = () => {
  const { amigos } = useSelector(state => ({
    amigos: state.amigos,
  }));
    return(
        <>
        <h3>Listado de Amigos: Total {amigos.length} amigos</h3>
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
              </tr>
            );
          })
        )}
      </table>
        <Link to="/" >Listado</Link>
        </>
    )
}

export default TotalAmigos