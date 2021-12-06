const removeFromArray = function (arr, ...args) {
    for (let i = 1; i < arguments.length; i++) {
        let index = 0;
        while (index < arr.length) {
            if (arguments[i] === arr[index]) {
                arr.splice(index, 1);
                i--;
            }
            index++;
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
