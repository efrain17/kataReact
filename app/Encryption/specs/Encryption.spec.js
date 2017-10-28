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
      const palabra = instance.desencripta('POHAOB', 'OPQRSTUVWXYZABCDEFGHIJKLMN', 12);
      expect(palabra).toBe('BATMAN');
    });

     it('desencripta HOLA', () => {
      const palabra = instance.desencripta('VCZO', 'OPQRSTUVWXYZABCDEFGHIJKLMN', 12);
      expect(palabra).toBe('HOLA');
    });

    it('Obtiene fila correcta', () => {
      const fila = instance.optenerFila(3);
      expect(fila).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
    });

    it('desencripta mensaje complejo', () => {
      let mensaje = { fila: '1 9', mensaje: 'FTUBT LNALJ' };
      const fila = instance.desencriptarMensajeComplejo('1 9', 'FTUBT LNALJ');
      expect(fila).toBe('ESTAS CERCA');
    });

  });
});
