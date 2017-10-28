import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  desencripta(palabra, fila) {
    let arrayFila = fila.split('');
    let arrayPalabra = palabra.split('');
    let letraIndice;
    let palabraDescrip = '';
    let indice;
    arrayPalabra.map(letra => {
      letraIndice = arrayFila.indexOf(letra) + 12;
      indice = letraIndice > 25 ? letraIndice - 26: letraIndice;
      palabraDescrip = palabraDescrip + arrayFila[indice];
    });
    return palabraDescrip;
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
