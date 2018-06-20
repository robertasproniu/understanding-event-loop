/**
 * fake async callback
 *
 * @param data
 * @param callback
 */
function asyncFake(data, callback) {
  if(!data) {
    callback(null, false);
    return;
  }
  callback(null, true);
}

/**
 * truly async callback
 *
 * @param data
 * @param callback
 */
function asyncReal(data, callback) {
  process.nextTick(callback, null, !!data);
}