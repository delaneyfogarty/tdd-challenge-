// IMPORT MODULES under test here:
import {
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

import {
    addExclamationPoints,
} from '../functions.js';

test('this test should add exclamation points to the string bunny rabbit', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = 'bunny rabbit' + '!!!';

    expect.equal(actual, expected, 'bunny rabbit plus !!! equals bunny rabbit!!!');
});



