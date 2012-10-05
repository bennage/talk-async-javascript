// Using Event Handlers
(function () {
    "use strict";

    var webService = new ExampleService();

    webService.addEventListener("complete", function (result) {
        // do something
    });

    webService.fetch("http://some/endpoint");

})();


// Using Callbacks
(function () {
    "use strict";

    var webService = new ExampleService();

    webService.fetch("http://some/endpoint", function (result) {
        // do something
    });

})();


// Using Promises
(function () {
    "use strict";

    var webService = new ExampleService();

    webService.fetch("http://some/endpoint").then(function (result) {
        // do something
    });

})();

// Async programming is not easy!
// However, async programming is necessary.