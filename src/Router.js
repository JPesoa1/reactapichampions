import React, { Component } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Apuestas from './components/Apuestas';
import Equipos from './components/Equipos';
import MenuChampions from './components/MenuChampions';
import Jugadores from './components/Jugadores';
import { useParams } from 'react-router-dom';
import DetallesJugador from './components/DetallesJugador';
import InsertarApuesta from './components/InsertarApuesta';
export default class Router extends Component {
  render() {

    function EquiposElement(){
        var {id}=useParams();
        return(<Equipos id={id}/>)
    }
    function JugadoresElement(){
        var {id}=useParams();
        return(<Jugadores id={id}/>)
    }
    function DetallesjugadoresElement(){
        var {id}=useParams();
        return(<DetallesJugador id={id}/>)
    }
    
    return (
      <div>
        <BrowserRouter>
            <MenuChampions/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/apuestas' element={<Apuestas/>}/>
                <Route path='/equipos/:id' element={<EquiposElement/>}/>
                <Route path='/jugadores/:id' element={<JugadoresElement/>}/>
                <Route path='/detallesjugadores/:id' element={<DetallesjugadoresElement/>}/>
                <Route path='/insertarapuesta' element={<InsertarApuesta/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
