import { getUser } from './DecaUser.js';

test('getUserProfile', async () => {
  expect((await getUser('hstream')).username).toEqual('hstream');
});
