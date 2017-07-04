import test from 'ava';

import Dev from '../src/Dev';

test('foo', t => {
  let dev = new Dev();
  t.truthy(dev.run(), "Work");
});
