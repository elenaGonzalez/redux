import './App.css'
import List from './components/List.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import TotalAmigos from './components/TotalAmigos.jsx'
import { allAmigos } from './components/Redux/actions/amigosActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAmigos())
  }, [])
  return (
    <div className="App">
      <div className="tabcontent">
        <h1>Implementando Redux</h1>
      </div>
      <Router>
        <Route exact path="/" component={List} />
        <Route exact path="/total/amigos" component={TotalAmigos} />
      </Router>
    </div>
  );
}

export default App
