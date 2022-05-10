const findAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}

const findMax = (array) => {
    return Math.max(...array);
}

const findMin = (array) => {
    return Math.min(...array);
}


const analyzeArray = (array) => {
    if (array.some(isNaN)) {
        return {}
    }
    const average = findAverage(array);
    const min = findMin(array);
    const max = findMax(array);
    const length = array.length;
    return {average, min, max, length}
}

export default analyzeArray