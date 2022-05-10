import analyzeArray from '../scripts/analyzeArray.js'

test('analyzes array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1,max: 8, length: 6})
})

test('analyzes array of length 1', () => {
    expect(analyzeArray([6])).toEqual({average: 6, min: 6, max: 6, length: 1})
})

test('returns empty object for invalid number array', () => {
    expect(analyzeArray(['a','b','c'])).toEqual({})
})