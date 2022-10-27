import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

export default class InsertarApuesta extends Component {
    state={
        status:false
    }
    cajaUsuario=React.createRef();
    cajaReal=React.createRef();
    cajaAtle=React.createRef();
    cajaFecha=React.createRef();
    nuevaApuesta=(e)=>{
        e.preventDefault();
        var request = "api/Apuestas";
        var url = Global.urlChampions+request;
        var usu =this.cajaUsuario.current.value;
        var real = this.cajaReal.current.value;
        var atle = this.cajaAtle.current.value;
        var fech = this.cajaFecha.current.value;

        var aux=real+"-"+atle;

        var apuesta={
            usuario:usu,
            resultado:aux,
            fecha:fech
        }

        axios.post(url,apuesta).then(res=>{
            this.setState({
                status:true
            })
        })


    }
  render() {
    if(this.state.status){
        return(<Navigate to="/apuestas" />)
    }
    return (
      <div>
        <h1>Nueva Apuesta</h1>
        <form>
            <label>Usuario:</label>
            <br/>
            <input type="text" ref={this.cajaUsuario} required />
            <br/>
            <label>Real Madrid:</label>
            <br/>
            <input type="text" ref={this.cajaReal} required />
            <br/>
            <label>Atletico Madrid:</label>
            <br/>
            <input type="text" ref={this.cajaAtle} required/>
            <br/>
            <label>Fecha:</label>
            <br/>
            <input type="text" ref={this.cajaFecha} required />
            <br/>
            <button onClick={this.nuevaApuesta}>Nueva Apuesta</button>
        </form>
      </div>
    )
  }
}
