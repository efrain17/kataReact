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
          'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
          'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
      });
    });
  });

  describe('alfabeto', () => {
    it('el alfabeto esta completo', () => {
      const tabla = instance.generarTabla();

      expect(tabla.length).toBe(25);
      expect(tabla[0]).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA'); 

      expect(tabla[24]).toBe('ZABCDEFGHIJKLMNOPQRSTUVWXY');      

    });

    it('esta bien el render', () => {
      expect(component.find('div').length).toBe(25);
    });

  });
});
