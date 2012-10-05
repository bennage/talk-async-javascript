// Errors
// ------------------------
(function () {
    "use strict";

    function catchErrorLater() {

        return WinJS.Promise.as("simple")
            .then(function () {
                throw new Error("something bad");
            })
            .then(function () {
                // complete without error
            });
    }

    WinJS.Namespace.define("Example", {
        catchErrorLater: catchErrorLater
    });

})();