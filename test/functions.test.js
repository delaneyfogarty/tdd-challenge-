// IMPORT MODULES under test here:
//import {
//  myFunction,
//} from '../functions.js';

const { test, skip } = QUnit;

//test('this test should pass', (expect) => {
//    const expected = true;

//const actual = myFunction();

// expect.equal(actual, expected);
//});


//skip('this test should be skipped', (expect) => {
//  const expected = true;

// const actual = true;

//expect.equal(actual, expected);
//});

import {
    addExclamationPoints, multiplyBySeven, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem
} from '../functions.js';

test('this fxn should add exclamation points to the strings', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit' + '!!!');

    expect.equal(actual, expected);

    const expected2 = 'boi george!!!!';
    const actual2 = addExclamationPoints('boi george' + '!!!!');

    expect.equal(actual2, expected2);

    const expected3 = 'princey boi!!!!!';
    const actual3 = addExclamationPoints('princey boi' + '!!!!!');

    expect.equal(actual3, expected3, 'this will return exclamation points after the string');

});

test('this fxn should multiply a given number by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 49;
    const actual2 = multiplyBySeven(7);
    expect.equal(actual2, expected2);

    const expected3 = 21;
    const actual3 = multiplyBySeven(3);
    expect.equal(actual3, expected3, 'this will return the product of a chosen number and 7');
});

test('this fxn will take the quotient of number1 and number2 and multiply it by number3', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = 25;

    const actual2 = divideThenMultiply(10, 2, 5);

    expect.equal(actual2, expected2);

    const expected3 = 4;

    const actual3 = divideThenMultiply(6, 3, 2);

    expect.equal(actual3, expected3, 'this will return the product of number3 multiplied by the quotient of number1 and number2');
});

test('this fxn will take firstNumber, secondNumber, and thirdNumber and put them into an array', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual, expected);

    const expected2 = [7, 8, 9];
    const actual2 = returnAsAnArray(7, 8, 9);
    expect.deepEqual(actual2, expected2);

    const expected3 = [10, 11, 12];
    const actual3 = returnAsAnArray(10, 11, 12);
    expect.deepEqual(actual3, expected3, 'this will return an array of three chosen numbers');

});

test('this fxn will put given numbers into a string', (expect) => {
    const expected = '854';
    const actual = returnAsAString([8], [5], [4]);
    expect.equal(actual, expected);

    const expected2 = '799';
    const actual2 = returnAsAString([7], [9], [9]);
    expect.equal(actual2, expected2);

    const expected3 = '111';
    const actual3 = returnAsAString([1], [1], [1]);
    expect.equal(actual3, expected3, 'this will return a string of 3 chosen numbers');
});

test('this fxn will add two numbers and make that your lucky number!', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12!';
    const actual = makeLuckyGreeting(4, 8);
    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 7!';
    const actual2 = makeLuckyGreeting(3, 4);
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is 37!';
    const actual3 = makeLuckyGreeting(32, 5);
    expect.equal(actual3, expected3, 'this fxn will return a string with your lucky number equalling the sum of two numbers');

});

test('this fxn will generate the second item in an array', (expect) => {
    const expected = 2;
    const actual = getSecondItem([1, 2, 3]);
    expect.equal(actual, expected);

    const expected2 = 1;
    const actual2 = getSecondItem([0, 1, 2]);
    expect.equal(actual2, expected2);

    const expected3 = 7;
    const actual3 = getSecondItem([6, 7, 8]);
    expect.equal(actual3, expected3, 'this fxn will return the second item of an array');

});