import React, { Component } from "react";

class TotalProducts extends Component{
  
        constructor(props){
            super(props)
            this.state = {
                products: ""
            }
          }
          apiCall('Http://localhost:3001/api/users' , consecuencia){
            fetch('Http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch (error => console.log(error))
          }
          componentDidMount(){
            this.apiCall('Http://localhost:3001/api/users', this.mostrarProductos)
          }
          mostrarProductos = (data) =>{
            this.setState(
              {
                products
              }
            )
          }
        render(){
          console.log('render')
          let contendio;
          if (this.state.products == ""){
            contendio = <p>No tiene Productos</p>
          }else{
            contendio = <ul>
            <li>{this.state.products}</li>
          </ul>
          }
          return (
            <div>
              {contendio}
            </div>
          );
        }
      }
    
  export default TotalProducts;

