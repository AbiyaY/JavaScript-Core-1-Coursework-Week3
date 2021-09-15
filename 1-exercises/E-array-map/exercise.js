// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplied(number) {
    return number * 100;
}

var numbersMultiplied1 = numbers.map(multiplied);
console.log(numbersMultiplied1);


var numbersMultiplied2 = numbers.map(function multiplied(number) {
    return number * 100;
});
console.log(numbersMultiplied2);


var numbersMultiplied3 = numbers.map(function (number) {
    return number * 100;
});
console.log(numbersMultiplied3);


var numbersMultiplied4 = numbers.map(number => {
    return number * 100;
});
console.log(numbersMultiplied4);


var numbersMultiplied5 = numbers.map(number => number * 100);
console.log(numbersMultiplied5);