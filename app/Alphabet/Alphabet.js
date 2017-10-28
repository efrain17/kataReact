import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    }
  }

  generarTabla() {
    console.log('generarTabla');
    let tabla = [];
    let numeroLetra = 0;
    let fila = '';
    for (let i = 1; i <= 26; i++) {
      numeroLetra = i + 1;
      for (let x = 1; x <= 26; i++) {
        numeroLetra = numeroLetra >= 26 ? 1 : numeroLetra + 1;
        fila = fila + this.state.alphabet[numeroLetra];
      }
      tabla.push(fila);
    }
    return tabla;
  }
  
  render() {
    return (
      <div className="container">
        Alphabet Page
      </div>
    );
  }
}

export default Alphabet;
