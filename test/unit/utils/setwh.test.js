import utils from '../../../source/app/utils';

const { setWH } = utils;

test('sets width and height of an element', () => {
  const DOMObject = document.createElement('div');
  setWH(DOMObject, 500, 999);

  expect(DOMObject.width).toBe(500);
  expect(DOMObject.height).toBe(999);
});

test('sets width and height in styles', () => {
  const DOMObject = document.createElement('div');
  setWH(DOMObject, 600, 300, true);

  expect(DOMObject.style.width).toBe('600px');
  expect(DOMObject.style.height).toBe('300px');
});
