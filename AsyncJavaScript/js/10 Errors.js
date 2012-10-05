// Errors
// ------------------------
(function () {
    "use strict";


    // The simple case
    getRandomNumberAsync()
        .then(function (someNum) {

        }, function (error) {

        });


    // `then` vs `done`
    /*
                `then`              `done`
                ------------------ ----------------
        error   | silent capture   | throws
                | wraps error

        returns | a promise        | undefined
    */

    // See the documentation:
    // http://msdn.microsoft.com/en-us/library/windows/apps/hh700337.aspx

    // General error handler for promises
    WinJS.Promise.addEventHandler("error", function (args) {

    });

})();