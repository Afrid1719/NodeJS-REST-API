const express = require('express');
const app = express();
const PORT = 80;

const Logger = require('./middleware/logger');
const HomeController = require('./controllers/index');
const FriendsController = require('./controllers/friends');

app.use(Logger.logRequest);
app.use(express.json());

app.get('/', HomeController.greet);

app.get('/friends', FriendsController.getFriends);
app.get('/friends/:friendID', FriendsController.findFriend);
app.post('/friends', FriendsController.addFriend);
app.put('/friends/:friendID', FriendsController.updateFriend);
app.delete('/friends/:friendID', FriendsController.deleteFriend);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});