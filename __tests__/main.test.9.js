const async = require('../src/lib/async');

describe('Describe', () => {
  test('test', async () => {
    let value = await async.execute();
    console.log(value);
  });
});
