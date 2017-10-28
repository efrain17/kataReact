import React from 'react';
import {shallow} from 'enzyme';
import Encryption from '../Encryption';

describe('Encryption', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Encryption/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

  describe('desencriptador', () => {
    it('desencripta Batman', () => {
      const palabra = instance.desencripta('POHAOB', 'OPQRSTUVWXYZABCDEFGHIJKLMN');
      expect(palabra).toBe('BATMAN');
    });

     it('desencripta Batman', () => {
      const palabra = instance.desencripta('VCZO', 'OPQRSTUVWXYZABCDEFGHIJKLMN');
      expect(palabra).toBe('HOLA');
    });

  });
});
