import { StringManipulationService } from "./app-service";

export class ArrayManipulations implements StringManipulationService {
  constructor() {}

  arrayFindMultiples(myArray: any): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }
  arraySeparate(myArray: any): Array<string> {
    let str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  }
  arraySplit(myString: string): Array<number> {
    const temp = myString.split(",");
    const primeNo = [];
    let k = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeNo[k] = y;
          k++;
        }
      }
    }
    return primeNo;
  }

  arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }
  arrayReplace(myArray: any): Array<Number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let array = new ArrayManipulations();

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let myString: string = "1 25  Kundan ";
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myString));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
