const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

const Logger = require('./middleware/logger');
const GreetRouter = require('./routes/greet.router');
const FriendsRouter = require('./routes/friends.router');

app.use(express.static(path.join(__dirname, 'public')));
app.use(Logger.logRequest);
app.use(express.json());

app.use('/', GreetRouter);
app.use('/friends', FriendsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});