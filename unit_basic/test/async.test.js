const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async - done', (done) => {
    fetchProduct().then((item) =>
      expect(item).toEqual({ item: 'Milk', price: 200 })
    );
    done();
  });

  it('async - return', () => {
    return fetchProduct().then((item) =>
      expect(item).toEqual({ item: 'Milk', price: 200 })
    );
  });

  it('async - await', async () => {
    const item = await fetchProduct();
    expect(item).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolve', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
