const _ = require("lodash");

const sortArray = (array) => {
    const defaultValues = ['test string', 6, 99, 'test', 'asd', 11, 'a', 0, 1, 'xyz',  32]

    const unsortedArray = array ?? defaultValues;
    const isStringType = (item) => typeof item === 'string';
    const iterateByLength = (item) => item.length;
    const iterateAsc = (item) => item;

    const stringItems = unsortedArray.filter((item) => isStringType(item));
    const stringItemsSorted = _.sortBy(stringItems, [iterateByLength,  iterateAsc]);

    const restItems = unsortedArray.filter((item) => !isStringType(item));
    const restItemsSorted = _.sortBy(restItems);

    return [...restItemsSorted, ...stringItemsSorted];
}

module.exports = sortArray;