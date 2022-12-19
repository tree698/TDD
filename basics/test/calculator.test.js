const Calculator = require('../calculator.js');

describe('calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('initialize', () => {
    expect(cal.value).toBe(0);
  });

  it('set', () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add: less than 100', () => {
    cal.set(3);
    cal.add(5);
    expect(cal.value).toBe(8);
  });

  it('add: greater than 100', () => {
    expect(() => {
      cal.add(120);
    }).toThrow('Value can not be greater than 100');
  });

  it('substract', () => {
    cal.set(10);
    cal.subtract(3);
    expect(cal.value).toBe(7);
  });

  it('multiply', () => {
    cal.set(3);
    cal.multiply(4);
    expect(cal.value).toBe(12);
  });

  describe('divid', () => {
    it('num/num', () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });

    // it('0/num', () => {
    //   cal.divide(3);
    //   expect(cal.value).toBe(0);
    // });

    it('num/0', () => {
      cal.set(3);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('0/0', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
  });
});
