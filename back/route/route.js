const express = require ('express')
const router = express.Router();
const controler = require('../controller/controler');

router.route('/list')
     .get(controler.getNote)
     .post(controler.postList)
     .put(controler.putList)
     .delete(controler.deleteList);

router.route('/test').get(controler.getTest);


module.exports = router;