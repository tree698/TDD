const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Is empty array created?', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item', () => {
    stack.push('ellie');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrowError('Stack is empty');
    });

    it('returns the last pushed item and remove it from the stack ', () => {
      stack.push('ellie');
      stack.push('lee');
      expect(stack.pop()).toBe('lee');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrowError('Stack is empty');
    });

    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('lee');
      expect(stack.peek()).toBe('lee');
      expect(stack.size()).toBe(1);
    });
  });
});
