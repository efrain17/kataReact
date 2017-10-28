import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  desencripta(palabra) {
    let tabla = [];
    let arrayPalabra = [];
    let palabra = '';
    arrayPalabra.map(letra => {
      let letraDesencriptada = tabla.find(fila => fila[0] == letra);
      palabra = palabra + letraDesencriptada;
    });
    return palabra;
  }
  
  render() {
    return (
      <div className="container">
        Encryption page
      </div>
    );
  }
}

export default Encryption;
