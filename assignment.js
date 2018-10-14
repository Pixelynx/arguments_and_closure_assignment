// Question 1:

const double = (num) => {
  return num * 2;
}
// console.log(double(4));

const square = (num) => {
  return num * num;
}
// console.log(square(4));

const doubleSquare = (num) => {
  const doubledNum = double(num);
  const thenSquared = square(doubledNum);
  return thenSquared;
}
// console.log(doubleSquare(4));

// Question 2:

const classyGreeting = (firstName, lastName) => {
  return `Hello, ${firstName + ' ' + lastName}.`;
}
// console.log(classyGreeting("T'Keya", "Stevens"));

const yell = (str) => {
  return str.toUpperCase();
}
// console.log(yell("Hey"))

const yellGreeting = (firstName, lastName) => {
  const greet = classyGreeting(firstName, lastName);
  const greetWithYell = yell(greet);
  return greetWithYell;
}
// console.log(yellGreeting("T'Keya", "Stevens"));

// Question 3:

const removeDupes = (arr) => {
  let dupes = arr.filter((indx1, indx2) => {
    return arr.indexOf(indx1) === indx2;
  })
  return dupes;
}
// console.log(removeDupes(["dog", "cat", "fish", "cat", "hamster", "dog"]));

const concatAndRemoveDupes = (arr1, arr2) => {
  const combined = [...arr1, ...arr2];
  return byeDupes = removeDupes(combined);
}
// console.log(concatAndRemoveDupes([1, 2, 2, 3], [3, 4, 1, 5]));

// Question 4:

const sort = (arr) => {
  const numSort = (num1, num2) => {
    return num1 - num2;
  }
  return arr.sort();
};
// console.log(sort([94, 65, 89, 77, 32, 99]));

const middleElement = (arr) => {
  let midOfOdd = Math.floor(arr.length/2);
  let midOfEven = Math.floor((arr[arr.length/2] - 1 + arr[arr.length/2])) /2;

  if (arr.length % 2 !== 0) {
    return arr[midOfOdd];
  } else {
    return midOfEven;
  }
}
// console.log(middleElement([94, 65, 89, 77, 32, 99]));

const median = (arr) => {
  const gradesSort = sort(arr);
  return gradesMedian = middleElement(gradesSort);
}
// console.log(median([94, 65, 89, 77, 32, 99]));

// Question 5:

const repeat = (str, numberOfTimes = 2) => {

  return str.repeat(numberOfTimes);

}
// console.log(repeat("Hello", 6))


// ** Will have to ask about these last two later. ** //

// Question 6:

// const sum = (arr) => {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum([2, 3, 4, 5]))

// Question 7:

// const add5 = (num) => {
//   return num + 5;
// }
//
// const add9 = (num) => {
//   return num + 9;
// }
//
// const adder = (num) => {
//   return add5 + add9;
//
// }
// console.log(adder(5))
