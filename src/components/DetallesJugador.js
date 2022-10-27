import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class DetallesJugador extends Component {
    state={
        jugador:{}
    }
    cargarJugador=()=>{
        var request="/api/Jugadores/"+this.props.id
        var url=Global.urlChampions+request
        axios.get(url).then(res=>{
            this.setState({
                jugador:res.data
            })
        })
    }
    componentDidMount=()=>{
        this.cargarJugador();
    }

  render() {
    return (
      <div>
            <h1>{this.state.jugador.nombre}</h1>
            <br/>
            <img src={this.state.jugador.imagen} alt="imagen"/>
            <br/>
            <h2>{this.state.jugador.posicion}</h2>
            <br/>
            <h2>{this.state.jugador.fechaNacimiento}</h2>
            <br/>
            <h2>{this.state.jugador.pais}</h2>
            <br/>
            <NavLink className="btn btn-danger" to={"/jugadores/"+this.state.jugador.idEquipo}>Jugadores</NavLink>
      </div>
    )
  }
}
