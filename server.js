const express = require('express');
const app = express();
const PORT = 80;

var data = [
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Eistein',
    }
];

app.use((req, res, next) => {
    var start = Date.now();
    next();
    
    var end = Date.now();
    console.log(`${new Date().toString()} ==> ${req.method} ${req.url} - ${end - start}ms`);
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API server.');
})

app.get('/friends', (req, res) => {
    res.json(data);
})

app.get('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);

    var friend = data.find(val => val.id === friendID);
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({error: 'Friend does not exist'});
    }
})

app.post('/friends', (req, res) => {
    const name = req.body.name;

    if (!!name && typeof name !== 'Number') {
        var friend = data.find(val => val.name === name);
        
        if (friend) {
            res.json({success: false, data: 'Friend already exists!!'});
        } else {
            data.push({
                id: data.length + 1,
                name: name
            });
    
            res.json({success: true, data: data});
        }
    } else {
        res.status(400).json({success: false, data: 'Invalid data!!'})
    }
})

app.put('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);
    const name = req.body.name;

    var friend = data.find(val => val.id === friendID);

    if (!friend) {
        res.status(404).json({success: false, data: "Friend does not exist!!"});
    } else {
        data = data.map(val => val.id === friendID ? {id: val.id, name: name} : val);

        res.json({success: true, data: data});
    }
})

app.delete('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);

    var friend = data.find(val => val.id === friendID);

    if (!friend) {
        res.status(404).json({success: false, data: "Friend does not exist!!"});
    } else {
        data = data.filter(val => val.id !== friendID);

        res.json({success: true, data: data});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
});