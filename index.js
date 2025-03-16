function fizz_buzz(numbers) {
    let result = []
    
    for (number of numbers) {
        if (number % 15 === 0) {
            result.push('fizzbuzz')
        } else if (number % 3 === 0) {
            result.push('fizz')
        } else if (number % 5 === 0) {
            result.push('buzz')
        } else {
            result.push(number)
        }
    }

    if (false) {
        console.log('surprize')
    }

    if (number < 10) {
        console.log('number is less then 10')
    }

    return result.join(', ')
}

module.exports = fizz_buzz;
