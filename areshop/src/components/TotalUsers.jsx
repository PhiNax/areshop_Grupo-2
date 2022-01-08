import React, { Component } from "react";
import PropTypes from 'prop-types';

class TotalUsers extends Component{
  
        constructor(props){
            super(props)
            this.state = {
                users: "10"
            }
          }
          apiCall('Http://localhost:3001/api/users', consecuencia){
            fetch('Http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch (error => console.log(error))
          }
          componentDidMount(){
            this.apiCall('Http://localhost:3001/api/users' , this.mostrarUsuarios)
          }
          mostrarUsuarios = (data) =>{
            this.setState(
              {
                users
              }
            )
          }
        render(){
          console.log('render')
          let contendio;
          if (this.state.users == ""){
            contenido = <p>No tiene Usuarios</p>
          }else{
            contendio = <ul>
            <li>{this.state.users}</li>
          </ul>
          }
          return (
            <div>
              {contenido}
            </div>
          );
        }
      }
    
  export default TotalUsers;

