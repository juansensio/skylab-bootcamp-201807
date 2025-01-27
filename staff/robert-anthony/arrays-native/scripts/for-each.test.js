'use strict';

describe('Array.prototype.forEach', function () {
    var array;

    beforeEach(function () {
        array = [1, 2, 3, 4, 5];
    });

    it('should iterate and operate correctly', function() {
        var result = [];

        array.forEach(function(item) {
            result.push(item * 2);
        });

        expect(array.length).toBe(5);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(4);
        expect(array[4]).toBe(5); 

        expect(result.length).toBe(5);
        expect(result[0]).toBe(2);
        expect(result[1]).toBe(4);
        expect(result[2]).toBe(6);
        expect(result[3]).toBe(8);
        expect(result[4]).toBe(10); 
    });

    it('should call the passed callback function the number of times equal to length of array',function(){
        var spy = jasmine.createSpy("spy");
        array.forEach(spy);
        expect(spy).toHaveBeenCalledWith(jasmine.any(Number),jasmine.any(Number),jasmine.any(Array));
        expect(spy.calls.count()).toBe(array.length);
        expect(spy.calls.argsFor(0)).toEqual([1,0,array]);
    })
});