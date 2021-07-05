var express = require('express');
var router = express.Router();


var controller = require('../controllers/home');
router.get('/',controller.fetchdocuments);
router.post('/insertintodb',controller.insertion);
router.delete('/deletefromdb',controller.deletion);
router.get('/updatedb',controller.updation);
router.get('/updatelikes',controller.updatelikes);
router.post('/searchfortag',controller.searchfortag);


module.exports = router;