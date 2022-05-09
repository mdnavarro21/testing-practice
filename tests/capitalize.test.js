import capitalize from '../scripts/capitalize';

test('empty string', ()=> {
    expect(capitalize('')).toBe('');
})

test('string of length 1', ()=> {
    expect(capitalize('b')).toBe('B');
})

test('all lower case', ()=> {
    expect(capitalize('bananas')).toBe('Bananas');
})

test('all upper case', ()=> {
    expect(capitalize('BANANAS')).toBe('Bananas');
})

