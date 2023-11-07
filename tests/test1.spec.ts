import {expect} from 'chai';

import {add, modulo, subtract} from '../src/index.js';


describe('Index tests', () => {
  it('2 + 2 should return 4', () => {
    expect(add(2, 2)).to.equal(4);
  });
  it('2 - 2 should return 0', () => {
    expect(subtract(2, 2)).to.equal(0);
  });
  it('2 mod 2 should return 0', () => {
    expect(modulo(2, 2)).to.equal(0);
  });
  it('3 mod 2 should return 1', () => {
    expect(modulo(3, 2)).to.equal(1);
  });
});
