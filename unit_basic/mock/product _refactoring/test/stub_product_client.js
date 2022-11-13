class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'apple', available: false },
    ];
  }
}

module.exports = StubProductClient;
