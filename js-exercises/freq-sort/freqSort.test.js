import { freqSort } from './freqSort';

describe('Template Test', () => {
  test('Template Test', () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toStrictEqual([ 'z', 'b', 'a' ]);
  });
});
