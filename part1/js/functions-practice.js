/*eslint-env global*/
//STEP 1
var halfNumber = function (input) {
    "use strict";
    var result = input / 2;
    window.console.log("Half of " + input + " is " + result + ".");
};

//STEP 2
var squareNumber = function (input) {
    "use strict";
    var result = Math.pow(input, 2);
    window.console.log("The result of squaring the number " + input + " is " + result + ".");
};

//STEP 3
var percentOf = function (input1, input2) {
    "use strict";
    var result = (input1 / input2) * 100;
    window.console.log(input1 + " is " + result + " % of " + input2 + ".");
};

//STEP 4
var findModulus = function (input1, input2) {
    "use strict";
    var result = input1 % input2;
    window.console.log(result + " is the modulus of " + input1 + " and " + input2 + ".");
};

//STEP 5
var findSum = function (inputArray) {
    "use strict";
    var result = 0;
    var i;
    for (i = 0; i < inputArray.length; i += 1) {
        result += Number(inputArray[i]);
    }
    window.console.log("result sum is " + result);
};

window.addEventListener("load", function () {
    "use strict";
    var userInput1 = window.prompt("Half a number - Enter a number ");
    halfNumber(userInput1);

    var userInput2 = window.prompt("Square a number - Enter a number ");
    squareNumber(userInput2);

    var userInput3A = window.prompt("Percent of - Enter number 1 ");
    var userInput3B = window.prompt("Percent of - Enter number 2 ");
    percentOf(userInput3A, userInput3B);

    var userInput4A = window.prompt("Find modulus - Enter number 1 ");
    var userInput4B = window.prompt("Find modulus - Enter number 2 ");
    findModulus(userInput4A, userInput4B);

    var userInput = window.prompt("Please enter some another numbers delimited by a comma (',')");
    var userInputList = userInput.split(",");
    findSum(userInputList);
});