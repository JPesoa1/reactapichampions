import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'
export default class Equipos extends Component {
  state={
    equipos:{}
  }
  cargarEquipo=()=>{
    var request="/api/Equipos/"+this.props.id;
    var url = Global.urlChampions+request;

    axios.get(url).then(res=>{
      this.setState({
        equipos:res.data
      })
    })
    

  }
  componentDidMount=()=>{
    this.cargarEquipo();
  }
  componentDidUpdate=(oldProps)=>{
    if(oldProps.id != this.state.id){
      this.cargarEquipo();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.equipos.nombre}</h1>
        <br/>
        <img style={{width:"300px"}}src={this.state.equipos.imagen} alt="imagen"/>
        <br/>
        <h4>Champions: {this.state.equipos.champions}</h4>
        <br/>
        <p>{this.state.equipos.descripcion}</p>
        <br/>
        <NavLink className="btn btn-info" to={"/jugadores/"+this.state.equipos.idEquipo}>Jugadores</NavLink>
        <NavLink className="btn btn-warning" to="/">Volver</NavLink>
      </div>
    )
  }
}
