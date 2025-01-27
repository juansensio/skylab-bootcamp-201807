'use strict';

describe('Array.prototype.fill', function () {
    var array;

    beforeEach(function () {
        array = [1, 2, 3, 4, 5];
    });

    it('should fill the array with new elemnts', function() {
        array.fill(5, 3, 5);

        //a partir del 3, todo 5

        expect(array.length).toBe(5);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(5);
        expect(array[4]).toBe(5);

    });
});
