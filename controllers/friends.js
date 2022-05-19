var data = require('../model/data');
var id = 2;

function getFriends(req, res) {
    res.json(data);
}

function findFriend(req, res) {
    const friendID = Number(req.params.friendID);

    var friend = data.find(val => val.id === friendID);
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({error: 'Friend does not exist'});
    }
}

function addFriend(req, res) {
    const name = req.body.name;

    if (!!name && typeof name !== 'Number') {
        var friend = data.find(val => val.name === name);
        
        if (friend) {
            res.json({success: false, data: 'Friend already exists!!'});
        } else {
            data.push({
                id: ++id,
                name: name
            });
    
            res.json({success: true, data: data});
        }
    } else {
        res.status(400).json({success: false, data: 'Invalid data!!'})
    }
}

function updateFriend(req, res) {
    const friendID = Number(req.params.friendID);
    const name = req.body.name;

    var friend = data.find(val => val.id === friendID);

    if (!friend) {
        res.status(404).json({success: false, data: "Friend does not exist!!"});
    } else {
        data = data.map(val => val.id === friendID ? {id: val.id, name: name} : val);

        res.json({success: true, data: data});
    }
}

function deleteFriend(req, res) {
    const friendID = Number(req.params.friendID);

    var friend = data.find(val => val.id === friendID);

    if (!friend) {
        res.status(404).json({success: false, data: "Friend does not exist!!"});
    } else {
        data = data.filter(val => val.id !== friendID);

        res.json({success: true, data: data});
    }
}


module.exports = {
    getFriends,
    findFriend,
    addFriend,
    updateFriend,
    deleteFriend
};