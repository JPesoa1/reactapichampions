import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class Jugadores extends Component {
    state={
        jugadores:[]
    }

    cargarJugadores=()=>{
        console.log(this.props.id)
        var request="api/Jugadores/JugadoresEquipo/"+this.props.id
        var url=Global.urlChampions+request
        axios.get(url).then(res=>{
            this.setState({
                jugadores:res.data
            })
        })
    }
    componentDidMount=()=>{
        this.cargarJugadores();
    }
  render() {
    return (
      <div>

        <table border={1}>
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>POSICION</th>
                    <th>IMAGEN</th>
                    <th>DETALLES</th>
                </tr>
            </thead>
            <tbody>
                {

                        this.state.jugadores.map((jugador,index)=>{
                            return(<tr>
                                <td>{jugador.nombre}</td>
                                <td>{jugador.posicion}</td>
                                <td><img src={jugador.imagen} alt="foto"/></td>
                                <td><NavLink to={"/detallesjugadores/"+jugador.idJugador} className="btn btn-danger">Detalles</NavLink></td>
                            </tr>)
                        })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
