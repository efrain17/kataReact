import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      alphabet: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ]
    }
  }

  generarTabla() {
    let tabla = [];
    let numeroLetra = 0;
    let fila = '';
    for (let i = 1; i <= 25; i++) {
      numeroLetra = i;
      for (let x = 1; x <= 27; x++) {   
        fila = fila + (Boolean(this.state.alphabet[numeroLetra]) ? this.state.alphabet[numeroLetra] : '');
        numeroLetra = numeroLetra >= 26 ? 0 : numeroLetra + 1;
      }
      tabla.push(fila);
      fila = '';
    }
    return tabla;
  }
  
  render() {
    return <section key="tabla"> {
       this.generarTabla().map((fila, index) =>  {
        return <div key={index}> {index + 1} {fila}</div>
      })
    }
    </section>
  }
}

export default Alphabet;
