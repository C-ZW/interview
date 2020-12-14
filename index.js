// Give two functions.
// One for processing a parameter, the type is number, to detect if it is a multiple of 2 or multiple of 5.
// The function returns a response '<<number>> is a multiple of 2', which means it is a multiple of 2 but not a multiple of 5, vice versa.
// When the process parameter is a common multiple of 2 & 5, returns response '<<number>> is a common multiple of  2 & 5'  instead.
// The rest of the situations, return an exception.
// The other one for call the above function and display what it returns if there has no exception.
// Otherwise, response "<<number>> is not a common multiple of 2 & 5"

function validNumber(number) {
    if(number % 10 === 0) {
        return `<<${number}>> is a common multiple of  2 & 5`
    } else if(number % 2 === 0) {
        return `<<${number}>> is a multiple of 2`
    } else if(number % 5 === 0) {
        return `<<${number}>> is a multiple of 5`
    } else {
        throw new Error(`<<${number}>> is not a common multiple of 2 & 5`);
    }
}

function show() {
    for(let i = 0; i < 20; i++) {
        try {
            console.log(validNumber(i))
        } catch(err) {
            console.log(err.message)
        }
    }
}

show();