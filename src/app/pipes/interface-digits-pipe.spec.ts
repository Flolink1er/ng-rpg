import { TestBed } from '@angular/core/testing';
import { InterfaceDigitsPipe } from './interface-digits-pipe';

describe('interfaceDigitPipe', () => {
  let pipe = new InterfaceDigitsPipe();

  it('1. Testing 1 return', () => {
    expect(pipe.transform(0.2)).toBe(1);
    expect(pipe.transform(0.04)).toBe(1);
    expect(pipe.transform(0.51029)).toBe(1);
    expect(pipe.transform(0.009)).toBe(1);
  });

  it('2. Testing 0 return', () => {
    expect(pipe.transform(-0.2)).toBe(0);
    expect(pipe.transform(-0.004)).toBe(0);
    expect(pipe.transform(-50)).toBe(0);
    expect(pipe.transform(-900)).toBe(0);
  });
  it('3. Testing < 1 return', () => {
    expect(pipe.transform(12.01)).toBe(12);
    expect(pipe.transform(104)).toBe(104);
    expect(pipe.transform(6.9)).toBe(7);
    expect(pipe.transform(1.9)).toBe(2);
  });
  it('4. Testing digits params', () => {
    expect(pipe.transform(12.01, 1)).toBe(12.0);
    expect(pipe.transform(104, 2)).toBe(104.0);
    expect(pipe.transform(6.99, 3)).toBe(6.99);
    expect(pipe.transform(1.9, 0)).toBe(2);
  });
});
