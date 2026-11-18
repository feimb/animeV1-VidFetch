var express = require('express');
var router = express.Router();


var downloadController = require('../controllers/downloadController');
/* GET home page. */
router.get('/', function(req, res) {
  res.json({ title: 'Express' });
});
router.post('/info' , downloadController.getInfo);
router.post('/download', downloadController.downloadFile);


module.exports = router;
