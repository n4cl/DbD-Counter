'use strict';

function assert(actual, expected) {
    console.log('.');
    console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}
