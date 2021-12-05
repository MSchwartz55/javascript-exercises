const repeatString = function (text, num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result = result.concat(text);
    }

    return result;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
