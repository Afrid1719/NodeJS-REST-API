const path = require('path');

function greet(req, res) {
    res.send('Welcome to this API server.');
}

function index(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
} 

module.exports = {
    greet,
    index
}