const calculator = (()=> {
    const add = (x,y) => {
        return parseFloat(x) + parseFloat(y)
    }

    const subtract = (x,y) => {
        return parseFloat(x) - parseFloat(y)
    }

    const multiply = (x,y) => {
        return parseFloat(x) * parseFloat(y)
    }

    const divide = (x,y) => {
        return parseFloat(x) / parseFloat(y)
    }
    return { add, subtract, multiply, divide }   
})()

export default calculator