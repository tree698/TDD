function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    return onSuccess('yes');
  }
  return onFail('no');
}

module.exports = check;
