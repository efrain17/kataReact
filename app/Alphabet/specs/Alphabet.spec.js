import React from 'react';
import {shallow} from 'enzyme';
import Alphabet from '../Alphabet';

describe('Alphabet', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Alphabet/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({
        alphabet: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
          'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 
          'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
      });
    });
  });

  describe('on generarAlphabet', () => {
    fit('el alfabeto esta completo', () => {
      const tabla = instance.generarTabla();

      expect(tabla.length).toBe(26);
      expect(tabla[0]).toBe([
        'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'
      ]); 

      expect(tabla[25]).toBe([
        'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'
      ]);      

    });




  });
});
