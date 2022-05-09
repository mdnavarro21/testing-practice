import reverseString from "../scripts/reverseString";

test('returns string for empty string', () => {
    expect(reverseString('')).toBe('');
})

test('returns string for string of length 1', () => {
    expect(reverseString('b')).toBe('b');
})

test('reverses normal string', () => {
    expect(reverseString('bananas')).toBe('sananab');
})

test('preserves capitalization', () => {
    expect(reverseString('bAnAnaS')).toBe('SanAnAb');
})

