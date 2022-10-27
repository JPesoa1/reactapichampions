import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Apuestas extends Component {
  state={
    apuestas:[]
  }
  cargarApuestas=()=>{
    var request="api/Apuestas";
    var url=Global.urlChampions+request;
    axios.get(url).then(res=>{
      this.setState({
        apuestas: res.data
      })
    })

  }
  componentDidMount=()=>{
    this.cargarApuestas();
  }
  render() {
    return (
      <div>
        <br/>
        <NavLink className="btn btn-danger" to="/insertarapuesta/">Realiza apuesta</NavLink>
        <br/>
        <table style={{width:"300px"}}  border={2} style={{margin:"0 auto"}}>
          <thead>
            <tr>
              <th>USUARIO</th>
              <th>RESULTADO</th>
              <th>FECHA</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.apuestas.map((apuesta,index)=>{

                return(<tr>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.resultado}</td>
                  <td>{apuesta.fecha}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
