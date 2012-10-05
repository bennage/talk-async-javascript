// Making a Promise
// ----------------------
(function () {
    "use strict";

    function getRandomNumberAsync() {

        var init = function (complete, error, progress) {
            // complete (value)
            // error (error)
            // progress (status)

            var num = Math.random();
            complete(num);
        };

        var onCancel = function () {

        }

        return new WinJS.Promise(init, onCancel);
    }

})();

// Making a Promise for an API using Events

(function () {
    "use strict";

    function fetch(endpoint) {

        var webService = new ExampleService();

        var init = function (complete, error, progress) {

            webService.addEventListener("complete", function (result) {
                complete(result);
            });

            webService.addEventListener("error", function (err) {
                error(err);
            });

            webService.fetch(endpoint);
        };

        var onCancel = function () {
            webService.cancel();
        }

        return new WinJS.Promise(init, onCancel);
    }

})();

