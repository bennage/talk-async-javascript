// Using Cascading Events
// ----------------------
(function () {
    "use strict";

    // [1] authenticate user
    // [2] retrieve user data
    // [3] update last login

    var service = new ExampleService();
    var userLoginInfo = { username: "user", password: "password" };

    service.addEventListener("authenticated", function(result) {
        var userId = result.userId;

        if (result.success) {
            service.retrieveUserDetailsForId(userId);
        }
    });

    service.addEventListener("detailsRetrieved", function (details) {
        if (details.active) {
            service.updateLastLogin(userId);
        }
    });

    service.addEventListener("lastLoginUpdated", function (details) {
        console.log("after everything is finished...");
    });

    service.login(userLoginInfo);

    // The flow of the logic is difficult to determine
    // Handling errors adds another layer of complexity

})();
