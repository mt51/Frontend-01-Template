const covertStringToNumber = require('../covertStringToNumber');
describe('2进制', () => {
  test('以无法转换为数字的字符开头', () => {
    expect(covertStringToNumber('A123', 2)).toBeNaN();
  })

  test('超出进制的字符自动截断', () => {
    expect(covertStringToNumber('123', 2)).toBe(1);
  })

  test('小数', () => {
    expect(covertStringToNumber('123.321', 2)).toBe(1);
  })

  test('负数', () => {
    expect(covertStringToNumber('-900', 10)).toBe(-900);
  })
})

