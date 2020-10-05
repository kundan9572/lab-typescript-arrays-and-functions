"use strict";
exports.__esModule = true;
exports.ArrayManipulations = void 0;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayManipulations.prototype.arraySplit = function (myString) {
        var temp = myString.split(",");
        var primeNo = [];
        var k = 0;
        for (var i = 0; i < temp.length; i++) {
            var y = +temp[i];
            for (var j = 2; j < y; j++) {
                if (y % j === 0)
                    continue;
                else {
                    primeNo[k] = y;
                    k++;
                }
            }
        }
        return primeNo;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayManipulations;
}());
exports.ArrayManipulations = ArrayManipulations;
var array = new ArrayManipulations();
var myArray = [34, 45, 60, 23, 13, 25, 70];
var myString = "1 25  Kundan ";
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myString));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
