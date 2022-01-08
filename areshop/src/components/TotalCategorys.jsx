import React, { Component } from "react";
import PropTypes from 'prop-types';

class TotalCategorys extends Component{
  
        constructor(props){
            super(props)
            this.state = {
                categorys: ""
            }
          }
          apiCall('Http://localhost:3001/api/users', consecuencia){
            fetch('Http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch (error => console.log(error))
          }
          componentDidMount(){
            this.apiCall('Http://localhost:3001/api/users', this.mostrarCategorias)
          }
          mostrarCategorias = (data) =>{
            this.setState(
              {
                categorys
              }
            )
          }
        render(){
          let contendio;
          if (this.state.categorys == ""){
            contenido = <p>No tiene Categorias</p>
          }else{
            contendio = <ul>
            <li>{this.state.categorys}</li>
          </ul>
          }
          return (
            <div>
              {contenido}
            </div>
          );
        }
      }
    
  export default TotalCategorys;


