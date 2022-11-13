const UserService = require('../user_service.js');
const StubUserClient = require('./stub_user_client.js');

describe('UserService', () => {
  let userService;
  beforeEach(() => {
    userService = new UserService(new StubUserClient());
  });

  it('calls login() on UserClient when tries to login ', async () => {
    const response = await userService.login('ellie', 123);

    // login() on UserClient가 몇번 호출되었는지 테스트 불가!
    // expect(response).toHaveBeenCalledTimes(1);
  });
});
