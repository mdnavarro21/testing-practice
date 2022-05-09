import caesarCipher from './caesarCipher.js'

test('ciphers given string', () => {
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('wraps from z to a', () => {
    expect(caesarCipher('the lazy zebra')).toBe('uif mbaz afcsb')
})

test('preserves case', () => {
    expect(caesarCipher('tHis is My pASsWorD')).toBe('uIjt jt Nz qBTtXpsE')
})

test('preserves punctuation', () => {
    expect(caesarCipher('tHis, is: My....pASsWorD!!')).toBe('uIjt, jt: Nz....qBTtXpsE!!')
})