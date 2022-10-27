import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Global from '../Global';
export default class MenuChampions extends Component {
    state={
        equipos:[]
    }
    cargarEquipos=()=>{
        
        var request="/api/Equipos"
        var url = Global.urlChampions+request;
        axios.get(url).then(res=>{
            this.setState({
                equipos:res.data
            })
        })
    }
    componentDidMount=()=>{
        this.cargarEquipos();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Champions</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/">Home</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/apuestas">Apuestas</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Equipos
                                    </a>
                                    <ul className="dropdown-menu">
                                       {
                                        this.state.equipos.map((equipo,index)=>{
                                            return(<li><NavLink to={"/equipos/"+equipo.idEquipo}>{equipo.nombre}</NavLink></li>)
                                        })
                                       }
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
