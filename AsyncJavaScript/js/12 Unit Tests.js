// Unit Tests
// ------------------------

// Extracted from http://hilojs.codeplex.com

describe("after the presenter has started", function () {

    beforeEach(function (done) {

        var whenFolderIsReady = Windows.Storage.ApplicationData.current.localFolder.getFolderAsync("Indexed");

        whenFolderIsReady.then(function (folder) {
            var queryBuilder = new Hilo.ImageQueryBuilder()

            hubView = new Hilo.Hub.HubViewPresenter(nav, imageNav, listView, queryBuilder);
            hubView.start(folder).then(function () { done(); });

        });
    });

    describe("given nothing is selected, when selecting a picture", function () {

        beforeEach(function () {
            var picture = { groupIndex: 1, itemDate: new Date() };
            listView.dispatchEvent("selectionChanged", { hasItemSelected: true, item: picture });
        });

        it("should set the image index and show the app bar", function () {
            expect(imageNav.setNavigationOptions.wasCalled).true;
            expect(imageNav.setNavigationOptions.options.itemIndex).equals(1);
        });

    });

    describe("when a picture is selected and deselecting it", function () {

        beforeEach(function () {
            var picture = { groupIndex: 0, itemDate: new Date() };
            listView.dispatchEvent("selectionChanged", { hasItemSelected: true, item: picture });
            listView.dispatchEvent("selectionChanged", { hasItemSelected: false });
        });

        it("should hide the appbar", function () {
            expect(imageNav.clearNavigationOptions.wasCalled).true;
        });

    });

    describe("when a picture is selected and selecting another", function () {

        beforeEach(function () {
            var picture = { groupIndex: 1, itemDate: new Date() };
            listView.dispatchEvent("selectionChanged", { hasItemSelected: true, item: picture });
            listView.dispatchEvent("selectionChanged", { hasItemSelected: true, item: picture });
        });

        it("should reveal the appbar", function () {
            expect(imageNav.setNavigationOptions.wasCalled).true;
            expect(imageNav.setNavigationOptions.hidden).ok;
            expect(imageNav.setNavigationOptions.options.itemIndex).equals(1);
        });

    });

    describe("when a picture is invoked (touched or clicked)", function () {

        beforeEach(function () {
            var item = {
                data: {
                    itemDate: new Date("Jan 5 1973"),
                    groupIndex: 99
                }
            };
            listView.dispatchEvent("itemInvoked", { item: item });
        });


        it("should navigate to the detail page", function () {
            expect(nav.navigate.args[0]).equals("/Hilo/detail/detail.html");
        });

        it("should pass along the index of the selected picture", function () {
            expect(nav.navigate.args[1].itemIndex).equal(99);
        });

        it("should pass along the month/year query for the invoked picture", function () {
            expect(nav.navigate.args[1].query).exist;
        });
    });

});

// These examples use BDD-style 
// Tests are ran with mocha.js and chai.js