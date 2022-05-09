import calculator from '../scripts/calculator.js'

test("add two numbers", () => {
    expect(calculator.add(1,2)).toEqual(3);
})

test("subtract two numbers", () => {
    expect(calculator.subtract(10,4)).toEqual(6);
})

test("multiply two numbers", () => {
    expect(calculator.multiply(13,12)).toEqual(156);
})

test("divide two numbers", () => {
    expect(calculator.divide(72,8)).toEqual(9);
})