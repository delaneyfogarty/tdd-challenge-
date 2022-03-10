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
    addExclamationPoints, multiplyBySeven, divideThenMultiply, returnAsAnArray
} from '../functions.js';

test('this test should add exclamation points to the strings', (expect) => {
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

test('this test should multiply a given number by 7', (expect) => {
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

test('this test will take the quotient of number1 and number2 and multiply it by number3', (expect) => {
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

test('this test will take firstNumber, secondNumber, and thirdNumber and put them into an array', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual, expected);

    const expected2 = [7, 8, 9];
    const actual2 = returnAsAnArray(7, 8, 9);
    expect.deepEqual(actual2, expected2);

    const expected3 = [10, 11, 12];
    const actual3 = returnAsAnArray(10, 11, 12);
    expect.deepEqual(actual3, expected3);

});


