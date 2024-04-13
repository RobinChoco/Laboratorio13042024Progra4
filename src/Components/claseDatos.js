import React, { Component } from 'react';

class claseDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigoEmpleado: '',
      correoEmpleado: '',
      nombre: '',
      apellido: '',
      nickname: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola
    console.log('Datos enviados:', this.state);
    // También puedes restablecer el estado del formulario después de enviar los datos
    this.setState({
        codigoEmpleado: '',
        correoEmpleado: '',
        nombre: '',
        apellido: '',
        nickname: ''
    });
  }

  render() {
    return (
<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Codigo Empleado:
          <input type="number" name="codigoEmpleado" value={this.state.codigoEmpleado} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Correo Empleado:
          <input type="email" name="correoEmpleado" value={this.state.correoEmpleado} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Nickname:
          <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Limpiar</button>
      </form>
    
        <div>
            
            <p>Codigo Empleado: {this.state.codigoEmpleado}</p>
            <p>Correo Empleado: {this.state.correoEmpleado}</p>
            <p>Nombre: {this.state.nombre}</p>
            <p>Apellido: {this.state.apellido}</p>
            <p>Nickname: {this.state.nickname}</p>
        </div>
</div>

    );
  }
}

export default claseDatos;

  