// Using Nested Callbacks
// ----------------------
(function () {
    "use strict";

    // [1] authenticate user
    // [2] retrieve user data
    // [3] update last login

    var service = new ExampleService();
    var userLoginInfo = { username: "user", password: "password" };

    service.login(userLoginInfo, function (result) {

        var userId = result.userId;

        if (result.success) {

            service.retrieveUserDetailsForId(userId, function (details) {

                if (details.active) {

                    service.updateLastLogin(userId, function () {
                        console.log("after everything is finished...");
                    });
                }

            });

        }
    });

    // Identation makes the code difficult to read.
    // Handling errors adds another layer of complexity
    // You can simplify by extracing the functions

})();
