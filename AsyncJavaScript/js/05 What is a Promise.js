// What is a Promise?
// ----------------------
(function () {
    "use strict";

    // Promise is an object...
    var promise = getRandomNumberAsync();

    // When you execute an async operation using a promise, you don't get the value back.
    // Instead you get a _promise_ to get the value.

    // The value itself is passed into a function, using the method `then`.
    // This is the most used method on a promise.
    var next = promise.then(function (someRandomNumber) {

    });

    // `then` returns a promise as well
    next.then(function () {

    });

    // Or we could write them all in line...
    getRandomNumberAsync()
        .then(function (someRandomNumber) {

        })
        .then(function () {

        });

    // If our first callback returns a value,
    // that value is passed into the next promise in the chain.
    getRandomNumberAsync()
        .then(function (someNumber) {
            return someNumber + 1;
        }).then(function (someNumberPlusOne) {

        });

    // This is a bit silly though since the operations in this
    // example are not actually async
})();
