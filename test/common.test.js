/**
 * 单测文件
 */
import { getName, getType } from '../src'

// 单测 getName
test("getName('Ikun') === 'my name is Ikun'", () => {
  expect(getName('Ikun')).toBe('my name is Ikun')
})

// 单测 getType
test("getType('String')('Ikun') === true", () => {
  expect(getType('String')('Ikun')).toBe(true)
})
