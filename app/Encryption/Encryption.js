import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  desencripta(palabra, fila, factor) {
    let arrayFila = fila.split('');
    let arrayPalabra = palabra.split('');
    let letraIndice;
    let palabraDescrip = '';
    let indice;
    arrayPalabra.map(letra => {
      letraIndice = arrayFila.indexOf(letra) + factor;
      indice = letraIndice > 25 ? letraIndice - 26: letraIndice;
      palabraDescrip = palabraDescrip + arrayFila[indice];
    });
    return palabraDescrip;
  }

  optenerFila(numero) {
    let tabla = [
      'BCDEFGHIJKLMNOPQRSTUVWXYZA',
      'CDEFGHIJKLMNOPQRSTUVWXYZAB',
      'DEFGHIJKLMNOPQRSTUVWXYZABC',
      'EFGHIJKLMNOPQRSTUVWXYZABCD',
      'FGHIJKLMNOPQRSTUVWXYZABCDE',
      'GHIJKLMNOPQRSTUVWXYZABCDEF',
      'HIJKLMNOPQRSTUVWXYZABCDEFG',
      'IJKLMNOPQRSTUVWXYZABCDEFGH',
      'JKLMNOPQRSTUVWXYZABCDEFGHI',
      'KLMNOPQRSTUVWXYZABCDEFGHIJ',
      'LMNOPQRSTUVWXYZABCDEFGHIJK',
      'MNOPQRSTUVWXYZABCDEFGHIJKL',
      'NOPQRSTUVWXYZABCDEFGHIJKLM',
      'OPQRSTUVWXYZABCDEFGHIJKLMN',
      'PQRSTUVWXYZABCDEFGHIJKLMNO',
      'QRSTUVWXYZABCDEFGHIJKLMNOP',
      'RSTUVWXYZABCDEFGHIJKLMNOPQ',
      'STUVWXYZABCDEFGHIJKLMNOPQR',
      'TUVWXYZABCDEFGHIJKLMNOPQRS',
      'UVWXYZABCDEFGHIJKLMNOPQRST',
      'VWXYZABCDEFGHIJKLMNOPQRSTU',
      'WXYZABCDEFGHIJKLMNOPQRSTUV',
      'XYZABCDEFGHIJKLMNOPQRSTUVW',
      'YZABCDEFGHIJKLMNOPQRSTUVWX',
      'ZABCDEFGHIJKLMNOPQRSTUVWXY'
    ]
    return tabla[numero - 1];
  }

  desencriptarMensajeComplejo(filas, mensaje) {
    let arrayfilas = filas.split(' ');
    let arrayMensaje = mensaje.split(' ');
    let fila;
    let palabraDescrip = '';
    let factor = 0;
    let espacio;

    for (let i = 0; i < arrayMensaje.length; i++) {
      fila = this.optenerFila(arrayfilas[i]);
      factor = 26 - parseInt(arrayfilas[i]);
      espacio = i == arrayMensaje.length - 1 ? '': ' ';
      palabraDescrip = palabraDescrip + this.desencripta(arrayMensaje[i], fila, factor) + espacio;
    }
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
