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
    addExclamationPoints, multiplyBySeven
} from '../functions.js';

test('this test should add exclamation points to the strings', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit' + '!!!');

    expect.equal(actual, expected, 'this return will add three exclamation points to bunny rabbits');

    const expected2 = 'boi george!!!!';
    const actual2 = addExclamationPoints('boi george' + '!!!!');

    expect.equal(actual2, expected2, 'this will return four exclamation points to boi george');

    const expected3 = 'princey boi!!!!!';
    const actual3 = addExclamationPoints('princey boi' + '!!!!!');

    expect.equal(actual3, expected3, 'this will return five exclamation points after princey boi');

});

test('this test should multiply a given number by 7', (expect) => {
    const expected = 

})




