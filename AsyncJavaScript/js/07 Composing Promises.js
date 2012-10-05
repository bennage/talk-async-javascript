// Composing Promises
// ------------------
(function () {
    "use strict";

    // another pretend promise
    getRandomNumberHigherThanAsync(10).then(function (someNumberOverTen) {
        // do something with `someNumberOverTen`
    });

    // what happens when we return a promise from inside a promise?
    getRandomNumberAsync().then(function (someNumber) {
        return getRandomNumberHigherThanAsync(someNumber);
    }).then(function (something) {
        // What will `something` be?
    });

})();

// Nested Promises
// ----------------
(function () {
    "use strict";

    // Since you can return a promise from inside a promise,
    // you might end up with something like this...
    A().then(function (a) {
        return B(a).then(function (b) {
            return C(b).then(function (c) {
                return D(c).then(function (d) {
                    return E(d);
                });
            });
        });
    });

    // This is difficult to read and understand.
    // We might as well use callbacks...


})();

// Refactoring Promises
// --------------------
(function () {
    "use strict";

    // Since A returns a promise we could write this:
    var waitForAllToBeDone = A().then(function (a) {
        return B(a).then(function (b) {
            return C(b).then(function (c) {
                return D(c).then(function (d) {
                    return E(d);
                });
            });
        });
    });

    waitForAllToBeDone().then(function (e) {
        return F(e);
    });

    // Since the signature of the anonymous function is the 
    // same as F, then we can reduce to this:
    waitForAllToBeDone().then(F);

})();

// Simplify as much as possible...
// --------------------
(function () {
    "use strict";

    A().then(B).then(C).then(D).then(E).then(F);

})();