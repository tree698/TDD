// stub는 행동에 대한 테스트는 무리 -> 특정 상황에서 호출되는지?
// userService에서 isLogedIn이 true이면 login 함수가 실행되면 안되나..
// stub에서는 login 함수가 계속 실행됨

class StubUserClient {
  async login(id, password) {
    return 'success';
  }
}

module.exports = StubUserClient;
