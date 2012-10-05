// Using Chained Promises
// ----------------------
(function () {
    "use strict";

    // [1] authenticate user
    // [2] retrieve user data
    // [3] update last login

    var service = new ExampleService();
    var userLoginInfo = { username: "user", password: "password" };

    service.login(userLoginInfo)
        .then(function (result) {
            var userId = result.userId;

            if (result.success) {
                return service.retrieveUserDetailsForId(userId);
            }
        }).then(function (details) {
            if (details.active) {
                return service.updateLastLogin(userId);
            }
        }).done(function (details) {
            console.log("after everything is finished...");
        });

    // The flow of the logic is easier to understand
    // How are errors handled?
    // What about those cases where nothing is returned?

})();
