(function () {
    "use strict";

    // blocking operation

    function expensiveComputation() {

        var startTime = new Date();
        var totalMs = 0;

        // meaningless, but expsensive calculation
        for (var i = 0; i < 5000000; i++) {
            Math.sqrt(i * i) + Math.sqrt(i * i / 2);
        }

        totalMs = (new Date() - startTime) / 1000;

        console.log(totalMs);

        return totalMs;
    }

    WinJS.Namespace.define("Example", {
        expensiveComputation: expensiveComputation
    });

})();
