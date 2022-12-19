// ProductService가 잘 작동하는지 테스트
const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// 모듈간 의존성 -> ProductService는 ProductClient와 연동
// ProductClient 전체를 mock으로..
jest.mock('../product_client.js');

describe('ProductService', () => {
  const fetchItem = jest.fn(async () => {
    return [
      { item: 'Milk', available: true },
      { item: 'apple', available: false },
    ];
  });

  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItem,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();

    // jest.config.js -> clearMocks: false일 경우
    fetchItem.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: 'Milk', available: true }]);
    expect(items.length).toBe(1);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItem).toHaveBeenCalledTimes(1);
  });
});
