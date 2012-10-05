// Real Example using WinRT
// ------------------------
(function () {
    "use strict";

    // This code is extracted from http://hilojs.codexplex.com

    var randomAccessStream = Windows.Storage.Streams.RandomAccessStream,
        fileAccessMode = Windows.Storage.FileAccessMode,
        thumbnailMode = Windows.Storage.FileProperties.ThumbnailMode;

    function writeThumbnailToFile(sourceFile, targetFile) {

        var whenFileIsOpen = targetFile.openAsync(fileAccessMode.readWrite);
        var whenThumbailIsReady = sourceFile.getThumbnailAsync(thumbnailMode.singleItem);
        var whenEverythingIsReady = WinJS.Promise.join([whenFileIsOpen, whenThumbailIsReady]);

        var inputStream, outputStream;

        whenEverythingIsReady.then(function (args) {
            outputStream = args[0];
            var thumbnail = args[1];
            inputStream = thumbnail.getInputStreamAt(0);
            return randomAccessStream.copyAsync(inputStream, outputStream);

        }).then(function () {
            return outputStream.flushAsync();

        }).then(function () {
            inputStream.close();
            outputStream.close();
        });
    }

})();