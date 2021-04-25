const httpsStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpsStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};

exports.respondInternalError = (error, req, res, next) => {
    utils.logConsole(`ERROR occurred: ${error.stack}`);
    let errorCode = httpsStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experimencing a problem!`);
};