function logRequest(req, res, next) {
    var start = Date.now();
    next();
    
    var end = Date.now();
    console.log(`${new Date().toString()} ==> ${req.method} ${req.url} - ${end - start}ms`);
}

module.exports = {
    logRequest
}