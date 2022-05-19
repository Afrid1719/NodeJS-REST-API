const router = require('express').Router();
const Controller = require('../controllers/friends');

router.get('/', Controller.getFriends);
router.get('/:friendID', Controller.findFriend);
router.post('/', Controller.addFriend);
router.put('/:friendID', Controller.updateFriend);
router.delete('/:friendID', Controller.deleteFriend);

module.exports = router;