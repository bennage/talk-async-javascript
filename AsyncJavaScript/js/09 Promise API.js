// Promise API
// ------------------------
(function () {
    "use strict";

    // For the official documentation see:
    // http://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx

    var promise = new WinJS.Promise.as("simple value");

    promise.then(function (value) { });

    promise.done(function (value) { });

    promise.cancel();

    var waitForAll = WinJS.Promise.join([]);

    var waitForOne = WinJS.Promise.any([]);

    // See the documentation for even more features.

})();