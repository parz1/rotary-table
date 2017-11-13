import utils from '../../../source/app/utils';

const { scaleXY } = utils;

test('sets scaleX and scaleY property properly', () => {
  const testObject = {};
  scaleXY(testObject, 0.33);

  expect(testObject.scaleX).toEqual(0.33);
  expect(testObject.scaleY).toEqual(0.33);
});
