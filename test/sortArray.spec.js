const expect = require('chai').expect;

const sortArray = require('../utils/sorting')

describe('sortArray method',  () => {
    const unsortedArray = ['test string', 6, 99, 'ccc', 'asd', 11];
    const expectedResult = [ 6, 11, 99, 'asd', 'ccc', 'test string'];

    const sortedArray = sortArray(unsortedArray);

    it('should return 6 as first element', () => {
        const [firstItem] = sortedArray;

        expect(expectedResult[0]).to.equal(firstItem);
    });

    it('should return 11 as second element', () => {
        const [, secondItem] = sortedArray;

        expect(expectedResult[1]).to.equal(secondItem);
    });

    it('should return "test string" in last element', () => {
        expect(expectedResult[-1]).to.equal(sortedArray[-1]);
    });
});