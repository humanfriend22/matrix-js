import test from 'ava';
import { faker } from '@faker-js/faker';

import { generateMatrix, isMatrix, isPerfectMatrix } from '.';

function array(n: number) {
    let o: string[] = [];
    for (let i = 0; i < n; i++) o.push(faker.name.firstName());
    return o;
};

const emptyMatrix = generateMatrix([], 3),
    perfectMatrix = generateMatrix(array(9), 3),
    imperfectMatrix = generateMatrix(array(10), 3);

test('is array', t => {
    t.true(Array.isArray(emptyMatrix));
    t.true(Array.isArray(imperfectMatrix));
});

test('is matrix', t => {
    t.true(isMatrix(perfectMatrix));
    t.true(isMatrix(imperfectMatrix));

    // @ts-expect-error
    t.false(isMatrix({}));
});

test('is perfect matrix', t => {
    t.true(isPerfectMatrix(perfectMatrix));
    t.false(isPerfectMatrix(imperfectMatrix));

    // @ts-expect-error
    t.false(isPerfectMatrix({}));
});