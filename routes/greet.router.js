const Controller = require('../controllers/index');
const router = require('express').Router();

router.get('/', Controller.index);
router.get('/greet', Controller.greet);

module.exports = router;